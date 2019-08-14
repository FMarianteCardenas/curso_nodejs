let empleados = [
    {id:1,nombre:'joel'},
    {id:2,nombre:'meme'},
    {id:3,nombre:'juan'}
];

let salarios = [
    {id:1,monto:'1000'},
    {id:2,monto:'2000'}
];

let getEmpleado = (id,callback)=>{
    let empleado_db = empleados.find(empleado => empleado.id == id)
    if(!empleado_db){
        callback(`no existe un empleado con el id ${id}`);
    }else{
        callback(null,empleado_db);
    }
    
}

let getSalario = (empleado,callback)=>{
    let salario_db = salarios.find(salario=> salario.id === empleado.id)
    if(!salario_db){
        callback(`No se encontró salario para el usuario ${empleado.nombre}`)
    }else{
        let respuesta = {
            nombre: empleado.nombre,
            salario: salario_db.monto,
            id: empleado.id
        }
        callback(null,respuesta);
    }
}



getEmpleado(20,(error,empleado)=>{
    if(error){
        return console.log(error);
    }

    getSalario(empleado,(error,respuesta)=>{
        if(error){
            return console.log(error);
        }

        console.log(respuesta);
    })
    
});