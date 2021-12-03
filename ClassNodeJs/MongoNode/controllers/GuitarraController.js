const Guitarra = require("../models/Guitarra")

const listAllGuitars = (req,res)=>{
    Guitarra.find((err, guitarras)=>{
        if(err)return res.send(err)
        return res.send(guitarras)
    })
}

const saveGuitar = (req, res)=>{
    console.log(req.body)
    res.send(req.body)
}

module.exports = {
    listAllGuitars,
    saveGuitar
}