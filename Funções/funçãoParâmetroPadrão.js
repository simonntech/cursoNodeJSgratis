// Atribuir valor padrão para um parâmetro

function pow(number, exponent = 2) { //declarando o valor do parâmetro, este valor ficará como um valor padrão caso não seja passado um parâmetro na função
    return number ** exponent;
}

console.log((pow(5))) //resultado 25, sendo o expoente 2 o padrão