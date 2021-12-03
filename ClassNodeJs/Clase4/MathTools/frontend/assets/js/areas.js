const peticion = ()=>{
   let radio = document.getElementById("r").value;
   let altura = document.getElementById("h").value;
   let myModal = new bootstrap.Modal(document.getElementById('exampleModal'))
   let respuesta = document.getElementById("respuesta");

   console.log(radio, altura)

   if  (radio && altura){
       fetch(`http://localhost:8090/cilindro?r=${radio}&h=${altura}`)//,{method:'GET'})
       .then(respuesta => respuesta.json())
       .then(data => {
           console.log(data)
           respuesta.innerHTML = parseFloat(data.area).toFixed(2)
           myModal.show()
       })
   }
}

