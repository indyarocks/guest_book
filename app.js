var express = require("express");
var http = require("http");
var logger = require("morgan");
var path = require("path");
var app = express();

app.use(logger("short"));

var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.use(function(req, res){
	console.log('Here comes request at: ' + req.url);
	res.writeHead(200, { "Content-Type": "text/plain"})
	res.end("Looks like no file in public directory!");
	// res.status(200).send('Here comes request at: ' + req.url);
})

http.createServer(app).listen(3000)