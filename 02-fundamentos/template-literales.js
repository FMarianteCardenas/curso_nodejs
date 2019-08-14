let nombre = 'Deadpool';
let real = 'Genio';

let nombre_1 = nombre+' '+real;
let nombre_2 = `${nombre} ${real}`;

console.log(nombre_1 === nombre_2);

function getNombre(){
    return `el nombre es ${nombre} ${real}`;
}

console.log(`resultado: ${getNombre()}`);