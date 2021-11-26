const http = require("http")
const {calcularCilindro, calcularEsfera, calcularCubo} = require("./helpers/areas")
const colors = require("colors")

console.log("Hola  tu!".cyan)

const port = 8090
const ip = "localhost" // ejecutar-cms -> ipconfig

http.createServer((solicitud, respuesta)=>{
    const nuevaUrl = new URL(solicitud.url, `http://${solicitud.headers.host}`)
    console.log(nuevaUrl.toString().blue)
    console.log("Me llegó un request de la siguiente URL: ".rainbow + solicitud.url)
   
    switch(nuevaUrl.pathname){
        case '/cilindro':
            const r = (nuevaUrl.searchParams.get('r'))
            const h = (nuevaUrl.searchParams.get('h'))
            respuesta.write(`El area del cilindro es: ${calcularCilindro(r,h)}`)
            break;
        case '/esfera':
            const re = (nuevaUrl.searchParams.get('re'))
            respuesta.write(`El area de la esfera es: ${calcularEsfera(re)}`)
            break;
        case '/cubo':
            const aris = (nuevaUrl.searchParams.get('aris'))
            respuesta.write(`El area del cubo es: ${calcularCubo(aris)}`)
            break;
            default:
            respuesta.write("La ruta no existe")
    }

    // if(nuevaUrl.pathname == '/cilindro'){
    //     //resolver Cilindro

    // }else if(nuevaUrl.pathname == '/esfera'){
    //     //resolver Esfera

    // }else if(nuevaUrl.pathname == '/cubo'){
    //     //resolver Cubo

    // }
    respuesta.end();

}).listen(port, ip, ()=>{
    console.log(`Se inicio el server en la dirección -> http://${ip}:${port} mi pez!!!`)
})
