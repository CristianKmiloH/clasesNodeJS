// Arrow Functions

const printUpperName = (name) => {
    let upperName = name.toUpperCase()
    console.log(upperName)
}
printUpperName("Damian")

///////////////////////////////////////////////////////////

// function multiply(numA, numB){
//     return numA*numB
// }


let multiply = (numA, numB) => numA*numB

console.log(multiply(4,3))