let lista = [
  {nombre: 'Juan', edad: 15},
  {nombre: 'Oscar', edad: 19},
  {nombre: 'Ivan', edad: 23}
];

//Con funcion find...
lista.find( item => item.nombre == 'Oscasr' )? console.log('si existe'): console.log('no existe');

//con funcion include....