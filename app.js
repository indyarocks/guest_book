var express = require("express");
var http = require("http");

var app = express();

// New middleware
app.use(function(req, res, next){
	console.log('My fun middleware: start!')
	console.log("Here comes a request " + req.method + " to " + req.url);
	console.log('My fun middleware: end!')
	next();
});

app.use(function(req, res){
	console.log('Here comes request at: ' + req.url);
	res.writeHead(200, { "Content-Type": "text/plain"})
	res.end("Here comes a request " + req.method + " to " + req.url);
	// res.status(200).send('Here comes request at: ' + req.url);
})

http.createServer(app).listen(3000)