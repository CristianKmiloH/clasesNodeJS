const express = require("express");
const {connectDB} = require("./db/db");
const app = expresss();
const {guitarras} = require("./routes/guitarras")
conectDB();

app.use('/guitarras', guitarras);

app.listen(8080,()=>{
    console.log("Estoy escuchando en el host://localhost:" + 8080);
});
