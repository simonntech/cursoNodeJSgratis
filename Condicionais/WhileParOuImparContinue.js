//o CONTINUE continua o looping

let count = 0;

while(count <= 20) {
    count ++;

    if(count %2 == 0) {
        console.log(count, " é par");
        continue;
    }

    console.log(count, " não é par");
}