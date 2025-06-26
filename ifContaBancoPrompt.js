const rl = require("node:readline");

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

let bank = 3000;
console.log(`Valor total no banco: R$ ${bank}`);

prompt.question("Digite o valor que deseja transferir : \nR$", answer => {
    const amount = parseInt(answer);
    if (Number.isNaN(amount)) {
        console.log("Por favor digite um número válido!")
    } else if (amount > bank) {
        console.log(`Saldo insuficiente... SALDO ATUAL: R$${bank}`)
    } else if (amount <= 0) {
        console.log("Digite um valor maior que 0 (ZERO)!")
    } else {
        bank -= amount;
        console.log(`Valor de R$${amount} transferido com sucesso, SALDO ATUAL: R$${bank}`)
    }
    prompt.close();
})