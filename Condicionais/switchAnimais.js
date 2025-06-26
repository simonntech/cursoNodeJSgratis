// SWITCH

// switch (valor) {
//      case "esperado" : {
//      ...
//      break;
//  }
//}

// USO para vários CASOS DIFERENTES quando está comparando apenas um valor fixo para múltiplos resultados

const animal = "cachorro";

switch(animal) {
    case "gato": {
        console.log("miau");
        break;
    }
    case "galinha": {
        console.log("cocorico");
        break;
    }
    case "cachorro": {
        console.log("au au");
        break;
    }
    case "pato": {
        console.log("qua qua");
        break;
    }
    case "pássaro": {
        console.log("bem te vi");
        break;
    }
    default: {
        console.log("Animal desconhecido")
    }
}