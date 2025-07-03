// Desestruturação

function main() {

    const person = {
        name: "Bruno",
        age: 35,
        isProgrammer: true
    }

    const { name, age , isProgrammer} = person;

    console.log(name, age, isProgrammer)
}

main();