const hours = 1;

console.log(
    "Está de",
    hours >= 0 && hours < 6 ? "madrugada" :
    hours >= 6 && hours < 12 ? "manhã" :
    hours >=12 && hours <18 ? "tarde" :
    "noite"
)