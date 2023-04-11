//** destructurar */
const usuario = {
  nombre:"Gino Smith",
  edad:34
}
const {nombre1,edad1} = usuario;

let coordenadas = {
  x: 4,
  y: 6,
  z: 12
}
const {x,y,z} = coordenadas;

console.log(x);
console.log(y);
console.log(z);

//** sintaxis de desestructuracion de objetos anidados */
//** queremos usar las variables individuales para tarbajar más rápido con ellas */

const user = {
  johnDoe: {
    edad:27,
    correo: "johnDoe@yahoo.com"
  } 
};

//** const {johnDoe: {edad, correo} } = user;
//** se le puede tambien cambiar el nombre a las propiedades

const {johnDoe: {edad:edadDelUsuario, correo:correoDelUsuario} } = user;

console.log(edadDelUsuario); //** 27 */
console.log(correoDelUsuario); //** johnDoe@yahoo.com */


const PRONOSTICO_LOCAL = {
  "ayer":{
    minima:61,
    maxima:75
  },
  "hoy":{
    minima:64,
    maxima:77
  },
  "Mañana":{
    minima:68,
    maxima:80
  }
};

console.log(minimoHoy, maximoHoy);

//**desestructurado */
const {hoy: {minima: minimoHoy, maxima: maximoHoy}} = PRONOSTICO_LOCAL;

console.log(minimoHoy, maximoHoy); //** 64 77 */

let a;
let b;
let c;

[a, b, , , c] = [1,2,3,4,5,6];

console.log(a);
console.log(b); 
console.log(c); 

//** la desestructuracion se puede usar para cambiar los valores de las variables */

let d = 8;
let e = 6;

[ e, d] = [d , e];
console.log( d, e);

//** desestructuracion con el operador rest */
//** vamos a usar ese operador para reasignar un arreglo en varias variables */

let f;
let g;
let args;

[ f, g, ...args] = [1,2,3,4,5,6,7];

console.log(f);
console.log(g);
console.log(args);

//** ahora para remover los elementos de un array 
const arregloInicial = [1,2,3,4,5,6,7,8];

function removerTresPrimerosElementos(arreglo) {
  const [ , , , ...nuevoArreglo] = arreglo;
  return nuevoArreglo;
}

const arregloFinal = removerTresPrimerosElementos(arregloInicial);
console.log(arregloFinal); //** Eliminamos los primeros 3 elementos y el resultado es [4,5,6,7]

//** pasar objeto como argumento */

let nuevoPerfilCliente = {
  nombre: "Jane Doe",
  edad: 24,
  nacionalidad: "española",
  ubicación: "España"
};

const ActualizarPerfil = ({ nombre, edad}) => {
  console.log(nombre);
  console.log(edad);
};

ActualizarPerfil(nuevoPerfilCliente)

//** Eje 2 */

const estadisticas = {
  max: 56.78,
  desviacionEstandar: 4.34,
  mediana: 34.54,
  moda: 23.87,
  min: -0.75,
  promedio: 35.85
};

//** tenemos que identificar que propiedades vamos a necesitar en esa funcion y las escribimos entre llaves */
//** y se asignan a variables con las cuales vamos a trabajar en esa funcion */
const mitad = ({max, min}) => (max + min) / 2.0; //** lo suma y luego lo divide entre 2 */

console.log(mitad(estadisticas));
