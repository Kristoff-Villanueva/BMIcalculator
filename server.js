const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function (req, res) {
	console.log(req.body);
	let weight = Number(req.body.weight);
	let height = Number(req.body.height);

	let bmi = weight / height;

	res.send(`Your BMI is ${bmi}`);
});

app.listen(3000, function () {
	console.log("listening in port 3000");
});
