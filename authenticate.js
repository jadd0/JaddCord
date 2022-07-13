const cookieParser = require("cookie-parser");
const csrf = require("csurf");
const serviceAccount = require("./serviceAccountKey.json");
const bodyParser = require("body-parser");
const express = require("express");
const admin = require("firebase-admin");

const router = express.Router();

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://server-auth-41acc.firebaseio.com",
});

const csrfMiddleware = csrf({ cookie: true });

router.use(express.static("static"));
router.use(bodyParser.json());
router.use(cookieParser());
router.use(csrfMiddleware);



router.all("*", (req, res, next) => {
	res.cookie("XSRF-TOKEN", req.csrfToken());
	next();
});

router.get("/login", function (req, res) {
	res.render("login.html");
});

router.get("/signup", function (req, res) {
	res.render("signup.html");
});

router.get("/profile", function (req, res) {
	const sessionCookie = req.cookies.session || "";

	admin
		.auth()
		.verifySessionCookie(sessionCookie, true /** checkRevoked */)
		.then((userData) => {
			console.log("Logged in:", userData.email);
			res.render("profile.html");
		})
		.catch((error) => {
			res.redirect("/login");
		});
});

router.get("/", function (req, res) {
	res.render("index.html");
});

router.post("/sessionLogin", (req, res) => {
	console.log("hello");
	const idToken = req.body.idToken.toString();

	const expiresIn = 60 * 60 * 24 * 5 * 1000;

	admin
		.auth()
		.createSessionCookie(idToken, { expiresIn })
		.then(
			(sessionCookie) => {
				const options = { maxAge: expiresIn, httpOnly: true };
				res.cookie("session", sessionCookie, options);
				res.end(JSON.stringify({ status: "success" }));
			},
			(error) => {
				res.status(401).send("UNAUTHORIZED REQUEST!");
			}
		);
});

router.get("/sessionLogout", (req, res) => {
	res.clearCookie("session");
	res.redirect("/login");
});


module.exports = router;
