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

        let empleado_db = empleados.find(empleado => empleado.id == id)
        if(!empleado_db){
            throw new Error(`no existe un empleado con el id ${id}`);
        }else{
            return empleado_db;
        }
    
}

let getSalario = async(empleado)=>{
        let sal = salarios.find(salario=>salario.id === empleado.id)
        if(!sal){
            throw new Error(`no existe un salario para el empleado ${empleado.nombre}`)
        }else{
            let respuesta = {
                nombre:empleado.nombre,
                monto:sal.monto,
                id:empleado.id
            }
            return respuesta;
        }
}

let getInfo = async(id)=>{
    let empleado = await getEmpleado(id);
    let res = await getSalario(empleado);
    
    return `${res.nombre} tiene un salario de US$ ${res.monto} dólares`
}

getInfo(2).then((response)=>{
    console.log(response);
}).catch((error)=>{
    console.log('ERROR::: ',error)
});