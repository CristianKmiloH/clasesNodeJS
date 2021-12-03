const http = require("http")

http.createServer(function(req, res){
    console.log("Recibí un request!")
    //console.log(req.url)
    let parametros = req.url.substr(2).split("&")
    if(parametros.length == 2){
        console.log(parametros)
        let r = parseFloat(parametros[0].substr(2))
        let h = parseFloat(parametros[1].substr(2))
        console.log(r,h)
        let areaCilin = (2*Math.PI*(r**2))+(h*(2*Math.PI*r))
        res.write("El resultado del area del cilindro es: " + areaCilin)
    }
    
    res.end();
}).listen(8080)