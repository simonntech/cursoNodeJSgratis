// Objetos dentro da propriedade de um objeto:

const computer = {
    motherboard: "ASUS H1M",
    videoCard: "RX-550",
    processor: "Pentium G4500",
    font: {
        name: "XPG Fonte",
        watts: 500
    },
    case: {
        name: "X Games",
        color: "black"
    },
    ram: [
        {
            name: "HyperX",
            size: 8000
        },
        {
            name: "HyperX",
            size: 4000
        },
    ]
}

console.log("💻 Informações do Computador:");
console.log(`- Placa mãe: ${computer.motherboard}`);
console.log(`- Processador: ${computer.processor}`)
console.log(`- Placa de vídeo: ${computer.videoCard}`);
console.log(`- Fonte: ${computer.font.name}, ${computer.font.watts} watts`);
console.log(`- Quantidade placas de memória: ${computer.ram.length}`);
console.log(`- Memória Ram: `);
for(const ram of computer.ram) {
    console.log(` --${ram.name}, ${ram.size} MBs`)
}