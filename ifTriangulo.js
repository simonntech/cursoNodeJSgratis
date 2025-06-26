const sideA = 4;
const sideB = 4;
const sideC = 4;

if (sideA === sideB && sideB === sideC) {
    console.log("O triângulo é equilátero");
} else if (sideA === sideB || sideB === sideC || sideC === sideA) {
    console.log("O triângulo é isósceles");
} else {
    console.log("O triângulo é escaleno")
}