// as variáveis devem ter um nome explicativo, comentários são úteis apenas em alguns casos específicos


// importação da função de entrada de Prompt do NODE
const rl = require("node:readline");

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let name;

prompt.question("Qual é o seu nome? ", answer => {
    name = answer;
    prompt.close();
})

prompt.on("close", () => {
    console.log(`Seja bem vindo(a) ${name}`)
})