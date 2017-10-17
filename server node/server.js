// create module
var http = require("http");

var fs = require("fs");

// create server

http.createServer(function(request , result){

    result.writeHead(200, {"content-type":"text/html"});
    var page - fs.readFileSync(__dirname + "/index.html");

    //return
    result.end(page);
}).listen(8080);
