const express = require('express');
const cors = require("cors");
const app = express();

app.use(express.json());

const corsOptions = {
	origin: 'http://localhost:5173',
	optionsSuccessStatus: 200 // For legacy browser support
}

app.post('/login', function(req, res) {
  console.log(req.body)
})

app.listen(3000, () => {
	console.log(`Listening on http://localhost:${3000}`);
});
