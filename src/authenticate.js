const cookieParser = require("cookie-parser");
const csrf = require("csurf");
const bodyParser = require("body-parser");
const express = require("express");
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://server-auth-41acc.firebaseio.com",
});

const csrfMiddleware = csrf({ cookie: true });

const PORT = process.env.PORT || 3000;
const app = express();

app.engine("html", require("ejs").renderFile);
app.use(express.static("static"));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(csrfMiddleware);

function cookie(req, res, next) {
	res.cookie("XSRF-TOKEN", req.csrfToken());
	next();
}

function login(req, res) {
	res.render("login.html");
}

function signup(req, res) {
	res.render("signup.html");
}

function profile(req, res) {
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
}

function main(req, res) {
	res.render("index.html");
}

function loginPOST(req, res) {
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
}

function logoutGET(req, res) {
	res.clearCookie("session");
	res.redirect("/login");
}
