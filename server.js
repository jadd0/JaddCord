const auth = require("./serviceAccountKey.json");

const express = require('express');
const app = express();

console

const PORT = 3000

app.all("*", (req, res, next) => {
	cookie(req, res, next)
});

app.get("/login", function (req, res) {
	login(req, res)
});

app.get("/signup", function (req, res) {
	signup(req, res)
});

app.get("/profile", function (req, res) {
	profile(req, res)
});

app.get("/", function (req, res) {
	main(req, res)
});

app.post("/sessionLogin", (req, res) => {
	loginPOST(req, res)
});

app.get("/sessionLogout", (req, res) => {
	logoutGET(req, res)
});

app.listen(PORT, () => {
	console.log(`Listening on http://localhost:${PORT}`);
});
