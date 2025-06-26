// Ternário
// (expressão) ? (se verdadeiro) : (se falso)

const number = 6;
console.log((number % 2 === 0) ? "Par" : "Ímpar")


const learnedJS = false;
const withRincko = true;

console.log(
    learnedJS && withRincko
    ? "Aprendeu Javascript com Rincko Dev"
    : learnedJS ? "Aprendeu Javascript" : "Não aprendeu Javascript" //é possível utilizar um valor ternário dentro de outro ternário
)