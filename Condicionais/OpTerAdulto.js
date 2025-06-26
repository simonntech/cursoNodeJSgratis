const name = "Bruno";

const birthdate = 2009;

const currentYear = 2025;

const age = currentYear - birthdate;

const isdAdult = age < 18 ? false : true;


console.log(`${name} tem ${age} anos e${isdAdult ? " não" : ""} é criança`)