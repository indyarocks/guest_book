var express = require("express");
var http = require("http");
var logger = require("morgan");
var path = require("path");
var app = express();

app.use(logger("short"));

var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.get('/', function(req, res){
	console.log("HTTP Method " + req.method + " at " + req.path);
	res.status(200).send('Homepage')
});

app.get('/about', function(req, res){
	console.log("HTTP Method " + req.method + " at " + req.path);
	res.status(200).send('About page')
});

app.get('/help', function(req, res){
	console.log("HTTP Method " + req.method + " at " + req.path);
	res.status(200).send('Help page')
});

app.get('/hello/:who', function(req, res){
	console.log("HTTP Method " + req.method + " at " + req.path);
	res.status(200).send("Hello " + req.params.who + "!")
});

app.use(function(req, res){
	console.log("HTTP Method " + req.method + " at " + req.path);
	res.statusCode = 404;
	res.send('Not Found!');
});

http.createServer(app).listen(3000)