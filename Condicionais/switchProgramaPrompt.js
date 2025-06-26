const rl = require("node:readline");

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Bem vindo ao programa");
console.log("[1] Data Atual");
console.log("[2] Hora Atual");
console.log("[3] Ver Animais");
console.log("[4] Ver Comidas");
console.log("[5] Ver Linguagens");
console.log("[0] Sair");

prompt.question("> Selecione o que deseja fazer: ", answer => {

    switch(answer) {
        case "1": {
            const date = new Date();
            const day = date.getDate();
            const month = date.getMonth()+1;
            const year = date.getFullYear();
            console.log(`Hoje é ${day}/${month}/${year}`)
            break;
        }
        case "2": {
            const date = new Date();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            console.log(`Horário: ${hours}:${minutes} hrs`)
            break;
        }
        case "3": {
            console.log("Gato");
            console.log("Cachorro");
            console.log("Galinha");
            console.log("Macaco");
            break;
        }
        case "4": {
            console.log("Pizza");
            console.log("Bolo");
            console.log("Macarrão");
            console.log("Sorvete");
            break;
        }
        case "5": {
            console.log("Javascript");
            console.log("PHP");
            console.log("C++");
            console.log("Java");
            break;
        }

        default: {
            console.log("Fim do programa")
        }
    }

    prompt.close();
})