const express = require("express");
const { listen } = require("svelte/internal");
const gen = require("./userGenerator.js");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(gen);

const corsOptions = {
	origin: 'http://localhost:5173',
	optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));

const list = [];

app.post("/api", (req, res) => {
	const user = new gen(
		req.body.email,
		req.body.username,
		req.body.name,
		req.body.password,
		req.body.phoneNumber
	);
	const username = list.find(user => user.username === req.body.username)
	const email = list.find(user => user.email === req.body.email)
	const phoneNumber = list.find(user => user.phoneNumber === req.body.phoneNumber)
	list.push(user);
	// console.log(list);
	console.log(username, email, phoneNumber);
});

app.get("/api", (req, res) => {
	console.log(list.find(user => user.username === req.body.username))
});


const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Listening on http://localhost:${PORT}`);
});
