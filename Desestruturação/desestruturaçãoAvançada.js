// renomear por desetruturação avançado

function main() {
    const nickname = "Simon, Mago"

    const player = {
        nickname: "SimonTech",
        health: 42,
        inventory: {
            items: ["staff", "book"],
            potions: [
                { type: "regeneration", duration: 8},
                { type: "defense", duration: 8},
            ]
        },
    }

    const {nickname: nick, health} = player;

    console.log(nickname, nick, health)

    const { inventory: {potions} } = player;

    const [{duration, type}, {duration: secondDuration, type: secondType }] = potions;

    console.log(type, duration, secondType, secondDuration)

}

main();