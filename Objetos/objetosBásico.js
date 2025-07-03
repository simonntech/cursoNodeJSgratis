//OBJETOS podemos atribuir propriedades e métodos

const player = {
    nickname: "Ferreira",
    health: 20,
    isDead: false,
    present() {
        console.log(`Meu nick é ${this.nickname}!`)
    }
}

player.name = "Bruno" // a propriedade pode ser adicionada dessa forma, fora dos {}

player.present()
