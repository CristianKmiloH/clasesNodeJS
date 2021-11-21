const http = require("http")

http.createServer(function(req, res){
    res.write("Holaaa perros!")
    res.end();
}).listen(8080)