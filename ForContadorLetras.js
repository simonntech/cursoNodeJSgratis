//CONTADOR DE LETRAS COM USO DO FOR OF---

const text = "Bruno Simon Ferreira";
const letter = "o";
let times = 0;

for (const char of text.toLowerCase()) { //repetiu se baseando nos itens dentro do array
    if(char === letter) times++;
}

console.log(`A letra (${letter}) no nome ${text} se repete ${times} vezes`)