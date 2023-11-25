const a2 = require("prompt-sync")({siginit: true})

const nota = a2("Introduce tu nota (0-10)--> ")

switch (nota) {
    case "0":
    case "1":
    case "2":
        console.log("Tu calificación es muy deficiente'")
        break;
    case "3":
    case "4":
        console.log("Tu calificación es insuficiente")
        break;
    case "5":
        console.log("Tu calificación es suficiente")
        break;
    case "6":
        console.log("Tu calificación es bien")
        break;
    case "7":
    case "8":
        console.log("Tu calificación es notable")
        break;
    case "9":
    case "10":
        console.log("Tu calificación es sobresaliente")
        break;
    default:
        console.log("Solo se pueden introducir notas del 1 al 10")
        break;
}

