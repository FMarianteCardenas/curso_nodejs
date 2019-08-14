let idolo  = {
    nombre:'Kakaroto',
    alias:'Goku',
    poder:'Kame Ha',
    getNombre:function(){
        return `${this.nombre} ${this.alias} - poder: ${this.poder}`;
    }
}

console.log(idolo.getNombre());

let {nombre:nom,alias,poder} = idolo;

console.log(nom,alias,poder);