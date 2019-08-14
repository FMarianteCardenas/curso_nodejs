function sumar(a,b){
    return a + b;
}

console.log(sumar(10,20));


let sumar_flecha = (a,b)=>{
    return a+b;
}

console.log(sumar_flecha(10,20));

let saludar = ()=>'Hola Mundo';

console.log(saludar());


/**en caso de que la función reciba un solo parámetro se puede declarar como la siguiente funcion */
let hola = nombre => `Hola ${nombre}`;

console.log(hola('Francisco'));


/*en una funcion de flecha el this apunta a objetos que estan fuera de la funcion como en el siguiente ejemplo */
let idolo  = {
    nombre:'Kakaroto',
    alias:'Goku',
    poder:'Kame Ha',
    getNombre(){
        return `${this.nombre} ${this.alias} - poder: ${this.poder}`;
    }
}

console.log(idolo.getNombre());