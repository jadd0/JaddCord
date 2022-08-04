const express = require("express");
const gen = require("./userGenerator.js");
const cors = require("cors");
const request = require("request");
const dotenv = require("dotenv").config();
const CryptoJS = require("crypto-js");
const cookieparser = require("cookie-parser");
const jose = require("jose");
const app = express();


const key = process.env.KEY;
const PORT = 3000;

const ciphertext = CryptoJS.AES.encrypt('sophie', key).toString();

const bytes  = CryptoJS.AES.decrypt(ciphertext, 'ML3eB8h@!LrrKEA9AQnKQb7PMJeJdEb3');
const originalText = bytes.toString(CryptoJS.enc.Utf8);
	
console.log(ciphertext, originalText);

app.use(express.json());
app.use(gen);
app.use(cookieparser());

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

app.post('/login', function(req, res) {
  const email = req.body.email
	const password = req.body.password

	const user = list.find(user => user.email === email)

	if (user !== undefined) {
		if (user.password === password) {
			console.log(email + " logged in successfully")

			user.keyGenerator()

			const cookieObj = JSON.parse('{"id":1,"value":"code.google.com"}')

			res.cookie('details', cookieObj);
			res.status(200).send({ key: user.authKey })
		}
		else {
			res.status(401).send({ error: 'wrong email/password'})
		}
	}
	else res.status(401).json({ error: 'wrong email/password'})
})



app.listen(PORT, () => {
	console.log(`Listening on http://localhost:${PORT}`);
});
