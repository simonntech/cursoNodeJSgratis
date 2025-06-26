const rl = require("node:readline");

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

prompt.question("Qual número deseja ver a tabuada?", answer => {

    const number = Number.parseInt(answer);

    if(Number.isNaN(number)) {
        console.log("Digite um número válido!")
    } else {
        console.log(`Tabuada de ${number}`)
        for(let i = 1; i<=10; i++) {
            console.log(`${number} X ${i} = ${number * i}`)
        }
    }
    
    prompt.close();
})