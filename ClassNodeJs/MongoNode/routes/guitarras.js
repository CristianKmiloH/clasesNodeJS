const express = require("express");
const {listAllGuitars, saveGuitar} = require("../controllers/GuitarraController");
const guitarras = express.Router();

guitarras.get('/', listAllGuitars)
    //console.log("Recibi una petición en el Router Guitarras")
    //res.send("Tu solicitud ha sido atendida desde el router guitarras")


guitarras.post('/', saveGuitar)
    //console.log("Recibi una pet")
    //res.send('Hola desde el post')


module.exports = {
    guitarras
}