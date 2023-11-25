const a1 = require ("prompt-sync")({siginit: true})

const nombre = a1("Introduce tu nombre: ")

const edad = a1("Introduce tu edad: ")

if (edad>18) {
    console.log(nombre +" tienes permiso para conducir")
} else{
    console.log(nombre + " no tienes permiso para conducir")
}



