setTimeout(()=>{
  console.log('3 segundos después');
},3000);

let getUsuarioById = (id,callback) => {
  let usuario = {
    nombre : 'pedro',
    id
  }

  if (id === 20){
    callback(`el usuario con id ${id}, no existe en la BD`)
  }else{
    callback(null,usuario);
  }
}

getUsuarioById(21,(error,usuario)=>{
  if(error){
    return console.log(error);
  }
  console.log('usuario de base de datos', usuario);
});