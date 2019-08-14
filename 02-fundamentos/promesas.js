let empleados = [
    {id:1,nombre:'joel'},
    {id:2,nombre:'meme'},
    {id:3,nombre:'juan'}
];

let salarios = [
    {id:1,monto:'1000'},
    {id:2,monto:'2000'}
];

let getEmpleado = (id)=>{
    
    /**resolve se ejecuta si se encontro un empleado o fue exitoso y el reject si hubo un error */
    return new Promise( (resolve,reject) => {

        let empleado_db = empleados.find(empleado => empleado.id == id)
        if(!empleado_db){
            reject(`no existe un empleado con el id ${id}`);
        }else{
            resolve(empleado_db);
        }

    })
    
}

//esta funcion se puede remplazar con promesas en cadena
// getEmpleado(3).then((response)=>{
//     //console.log(response);
//     getSalario(response).then((response)=>{
//         console.log(response);
//     },(error)=>{
//         console.log('ERROR::',error);
//     })
// },(error)=>{
//     console.log('ERROR:',error);
// })

/**promesas en cadena */

getEmpleado(10).then((response)=>{
    return getSalario(response);
}).then((response)=>{
    console.log(response);
}).catch((error)=>{
    console.log('ERROR EN PROMESAS EN CADENA: ',error);
})

let getSalario = (empleado)=>{
    return new Promise((resolve,reject)=>{
        
        let sal = salarios.find(salario=>salario.id === empleado.id)
        if(!sal){
            reject(`no existe un salario para el empleado ${empleado.nombre}`)
        }else{
            let respuesta = {
                nombre:empleado.nombre,
                monto:sal.monto,
                id:empleado.id
            }
            resolve(respuesta)
        }
    })
}



