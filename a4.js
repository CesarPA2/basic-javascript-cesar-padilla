const a4 = require("prompt-sync")({siginit: true})

let textInput = a4("Introduce los textos a concatenar--> ")
let cadena = ""
let texto

while (textInput!= "cancelar"){ 
    if (String(textInput)) {
        texto = String(textInput)
        cadena = (cadena + texto + "-" )
    } else {
        a4("Siga introduciendo los textos a concatenar-> ")
    }
    textInput = a4("Introduce los textos a concatenar-> ")
}

console.log("Has cancelado el proceso, los textos son: " + cadena);