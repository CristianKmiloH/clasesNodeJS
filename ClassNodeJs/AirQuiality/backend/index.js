const express = require('express')
const {getAirQualityFromUSB, getAirQualityFromThirdParty} = require('./helpers/airQualityIndex')

const app = express()
// const cors = require(`cors`)
const port = 3030

app.get("/aqi", /*cors(),*/ async (req,res)=>{
    //console.log("Eyyyy recibí un request")
    res.send({
        aqiFromUSB:getAirQualityFromUSB(),
        aquiFromThirdParty: await getAirQualityFromThirdParty()
    })
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
}) 

