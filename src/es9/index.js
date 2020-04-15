const obj ={
  name: 'Pepe',
  age: 23,
  country: 'bo'
};
// esta funcion elimina un campo del objeto 
let {country, ...all} = obj
console.log(all, obj)


//adicionando campos a objetos
const obj ={
  name: 'Pepe',
  age: 23,
  country: 'bo'
};
const obj1 = {
  ...obj,
  nota: 57
}
console.log(obj, obj1)


//promise . finally para avisar cuando se concluya una promesa
const promise = new Promise( ( resolve, reject) => {
    true?
      setTimeout( resolve, 3000, 'Hola Mundo'):
      reject(new Error('Se rechazo'));
    })

promise
  .then(console.log)
  .catch(console.log)
  .finally( () => console.log('finalizo la promesa'))


  //Agrupar expresiones regulares

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
// haciendo match 
const match = regexData.exec('2020-02-01')
