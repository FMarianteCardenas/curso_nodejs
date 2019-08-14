/**
 * Async Await
 */

 //cuando declaramos una funcion con async, se transforma automáticamente en una promesa
 //pudiendose utilizar el then y catch
//  let getNombre = async() =>{

//     throw new Error('Nombre indefinido');
//     return 'Pedro';
//  }

//esta funcion retornará una promesa despues de 3 segundos
let getNombre = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Felipe');
        },3000);
    });
}

let saludo = async() =>{
    //en una funcion asincrona se puede usar el await, donde el sistema espera alguna respuesta
    //y luego continua ejecutándose
    let nombre = await getNombre();
    return `Hola ${nombre}`
}

//llamando a la funcion asíncrona saludo
 saludo().then((response)=>{
     console.log('Ejecutado correctamente: ',response);
 }).catch((error)=>{
     console.log('ERROR EN ASYNC: ',error);
 })