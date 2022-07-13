const auth = require("./authenticate.js");
const cookieParser = require("cookie-parser");
const csrf = require("csurf");
const serviceAccount = require("./serviceAccountKey.json");
const bodyParser = require("body-parser");
const express = require("express");
const admin = require("firebase-admin");

const csrfMiddleware = csrf({ cookie: true });

const app = express();
app.engine("html", require("ejs").renderFile);
app.use(express.static("static"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(csrfMiddleware);

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://server-auth-41acc.firebaseio.com",
});


const PORT = 3000


app.all("*", (req, res, next) => {
	auth.cookie(req, res, next)
});

app.get("/login", function (req, res) {
	auth.login(req, res)
});

app.get("/signup", function (req, res) {
	auth.signup(req, res)
});

app.get("/profile", function (req, res) {
	auth.profile(req, res)
});

app.get("/", function (req, res) {
	auth.main(req, res)
});

app.post("/sessionLogin", (req, res) => {
	auth.loginPOST(req, res)
});

app.get("/sessionLogout", (req, res) => {
	auth.logoutGET(req, res)
});

app.listen(PORT, () => {
	console.log(`Listening on http://localhost:${PORT}`);
});
