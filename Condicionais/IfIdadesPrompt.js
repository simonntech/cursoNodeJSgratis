const rl = require("node:readline");

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

prompt.question("Digite sua idade: ", answer => {
    const age = Number.parseInt(answer); // transforma a variável STRING padrão do terminal para NÚMERO
    if (Number.isNaN(age)) {
        console.log("Por favor digite um número válido")
    } else {
        console.log(
            `Você tem ${age} anos e é ${age < 14 ? "criança" : age < 18 ? "adolescente" : age < 60 ? "adulto" : "idoso"}`
        )
    }
    prompt.close()
} )