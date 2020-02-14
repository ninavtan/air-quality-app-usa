var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("search");
});

app.get("/results", function(req, res){
	var city = req.query.city;
	var state = req.query.state;
	var url = "http://api.airvisual.com/v2/city?city=" + city + "&state=" + state + "&country=USA&key=8fa4d23b-06ea-4366-9a39-e0b0357a8270";
	request(url, function(error, response, body){
		if(!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			res.render("results", {data: data});
		}
	});
});


app.listen(3000, function() { 
  console.log('AQI App has started!!!'); 
});