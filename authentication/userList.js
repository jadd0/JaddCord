const express = require("express");
const gen = require("./userGenerator.js");
const cors = require("cors");
const request = require("request");
const dotenv = require("dotenv").config();
const CryptoJS = require("crypto-js");
const app = express();

const key = process.env.KEY;
const PORT = 3000;

const ciphertext = CryptoJS.AES.encrypt('sophie', key).toString();

const bytes  = CryptoJS.AES.decrypt(ciphertext, 'ML3eB8h@!LrrKEA9AQnKQb7PMJeJdEb3');
const originalText = bytes.toString(CryptoJS.enc.Utf8);
	
console.log(ciphertext, originalText);

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
	
	if (username !== undefined) {
		res.status(406).json({ error: 'username taken' })
		return
	}
	else if (email !== undefined) {
		res.status(406).json({ error: 'email taken' })
		return
	}
	else if (phoneNumber !== undefined) {
		res.status(406).json({ error: 'phone number taken' })
		return
	}
	

	list.push(user);
	console.log(list);
	// console.log(username, email, phoneNumber);
});

app.get("/api", (req, res) => {
	console.log(list.find(user => user.username === req.body.username))
});




app.listen(PORT, () => {
	console.log(`Listening on http://localhost:${PORT}`);
});
