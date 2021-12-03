const https = require("https");

const getAirQualityFromUSB = ()=> {
    let mayor = 200, menor = 50;
    return Math.random()*(mayor-menor)+menor;
}

const getAirQualityFromThirdParty = () => {
    //Consultar un servicio de terceros
   return new Promise((resolverPromesa, rechazarPromise) => {
        try{    
            https.get("https://api.waqi.info/search/?token=e0f8647eed86080afd4106c66e69a97fc75da906&keyword=bogota", (res) =>{
            //obtener body del reponse
                res.on("data", (chunk) => {
                    let dataJSON = JSON.parse(chunk)
                    let porLocalidades = dataJSON.data
                    let miLocalidad = porLocalidades.find((localidad)=>{return localidad.uid == 6231})
                    resolverPromesa(miLocalidad);
                });
            })
        } catch {
            rechazarPromise("Ocurrio un error en la obtención del Body")
        }
    }).then((data)=>{return data}).catch((err)=>{return err})
}

module.exports = {
    getAirQualityFromUSB,
    getAirQualityFromThirdParty
}