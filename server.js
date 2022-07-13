const express = require('express');
const auth = require("./authenticate.js");

const app = express();

app.engine("html", require("ejs").renderFile);

app.use(auth)

const PORT = 3000



app.listen(PORT, () => {
	console.log(`Listening on http://localhost:${PORT}`);
});
