const a3 = require("prompt-sync")({siginit: true})

let numInput = a3("Introduce números para la suma--> ")
let numeros
let suma = 0

while (numInput!== "cancelar"){ 
    if (Number(numInput)) {
        numeros = Number(numInput)
        suma = (suma + numeros)
    } else {
        console.log("Introduce números válidos" )         
    }

    numInput = a3("Siga introduciendo números para la suma--> ")
}

console.log("Proceso cancelado, la suma total es: " + suma);