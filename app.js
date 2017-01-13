var express = require("express");
var http = require("http");

var app = express();

app.use(function(req, res){
	console.log('Here comes request at: ' + req.url);
	res.status(200).send('Here comes request at: ' + req.url);
})

http.createServer(app).listen(3000)