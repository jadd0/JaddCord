const express = require('express');
const auth = require("./src/authenticate.js");
// const socketApp = require('./src/socket.js');

const io = require("socket.io")(4000, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"],
		credentials: true,
	},
});

console.log(io)

const app = express();

app.engine("html", require("ejs").renderFile);

app.use(auth)

const PORT = 3000



app.listen(PORT, () => {
	console.log(`Listening on http://localhost:${PORT}`);
});

console.log("hello")

io.on("connection", (socket) => {
	console.log("connection")
})