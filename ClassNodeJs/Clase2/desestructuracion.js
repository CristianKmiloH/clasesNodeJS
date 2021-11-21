let persona = {
    nombre: 'Cris',
    apellido: 'Henao',
    edad: 2
}

// function printNameAge(persona){
//     console.log(persona.nombre, persona.apellido)
// }

// function printNameAge({nombre, edad}){
//     console.log(persona)
//     console.log(nombre, edad)
// }

//printNameAge(persona)

const{nombre, apellido, edad} = persona

console.log(nombre, edad, apellido)


const family = ["padres", "hijos", "nietos"]

const [,,fam3] = family
console.log(fam3)
