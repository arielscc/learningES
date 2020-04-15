// Antes de ECS 6
function newFunction( nombre, edad, pais){
  nombre = nombre || 'Pedro';
  edad = edad || 23;
  pais = pais || 'BO';
  console.log( nombre, edad, pais );
}

// en ECS 6 
function newFunction2( nombre = "Pedro", edad = 23, pais = "BO"){
  console.log( nombre, edad, pais );
}
newFunction2();
newFunction2( 'Cristian', 16, 'BO' );


//Templates literals ES 6

let hello = 'hello';
let world = 'world';
let epicPhrase =  `${hello} ${world}`;
console.log(epicPhrase);

//Manejo de saltos de linea
let lorem = "Esse anim laborum eu ullamco amet pariatur.\n"
+ "Aliqua mollit laboris in commodo sit duis esse nostrud duis aliqua."

//ES6
let lorem2 = `Esse anim laborum eu ullamco amet pariatur. 
Aliqua mollit laboris in commodo sit duis esse nostrud duis aliqua.`;

console.log(lorem)
console.log(lorem2)

//Desestructuración de objetos
let persona = {
  nombre: 'Ariel',
  apellido: 'Chura',
  pais: 'bo'
}
console.log( persona.nombre, persona.apellido, persona.pais);

//ES6

let { nombre, apellido, pais } = persona;
console.log( nombre, apellido, pais);


//Operadores de propagación //ES6
let team1 = ['Oscar', 'Julian', 'Ricardo' ];
let team2 = ['Valeria', 'Jesica', 'Camila' ];

let education = ['David', ...team1, ...team2 ];
console.log(education);


//Asignacion de clave valor a objetos
let name = 'pedro';
let age = 43;

obj  = { name : name, age: age}
obj2 = { name, age }
console.log( obj )
console.log( obj2 )

//arrow  functions
const users =[
  {name: 'oscar', age: 42},
  {name: 'valeria', age: 32},
  {name: 'neka', age: 26},
];

let names = users.map( item => item.name );
let cadena = names.join();
console.log( cadena );

const a = new Promise((resolve, reject) => {
  if( false){
    resolve('se acepto la promesa');
  }else{
    reject('no se acepto la promesa');
  }
});
a.then(console.log).catch(console.log);

