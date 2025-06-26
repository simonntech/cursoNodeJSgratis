// Estutura de repetição com intervalo de tempo de execução

for(let i = 0; i <= 10; i ++) {
    setTimeout(() => console.log(i), 500 * i);
}
