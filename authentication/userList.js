const express = require("express");
const { listen } = require("svelte/internal");
const gen = require("./userGenerator.js");
const app = express();

app.use(express.json());
app.use(gen);

const list = [];

app.post("/api", (req, res) => {
	console.log(req.body);
	const user = new gen(
		req.body.email,
		req.body.username,
		req.body.name,
		req.body.password,
		req.body.phoneNumber
	);
	list.push(user);
	console.log(list);
});

app.get("/api", (req, res) => {
	console.log(list.find(user => user.username === req.body.username))
});


const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Listening on http://localhost:${PORT}`);
});
