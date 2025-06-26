// while é usado quando não sabemos quando a condição será atendida

let current;
let times = 0;
const expected = 20;

while(current !== expected) {
    current = Math.floor(Math.random() * (50+1))
    console.log(current);
    times++;
}

console.log(times);