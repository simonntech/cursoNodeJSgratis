const stuff = "pá";

switch (stuff) {
    case "": {
        console.log("vazio");
        break;
    }
    
    case "pizza" :
    case "bolo" :
    case "hamburguer" :
    case "pastel" : {
        console.log("comida");
        break;
    }

    case "gato":
    case "cachorro":
    case "galinha":
    case "vaca": {
        console.log("animal");
        break;
    }

    case "pá":
    case "martelo":
    case "enxada":
    case "marreta": {
        console.log("ferramenta");
        break;
    }

    default : {
        console.log("inválido");
    }
}