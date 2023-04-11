/*
const fecha = function(){
  return new Date();
} 
*/
//** son muy útiles cuándo intentamos pasar una funcion como argumento a otra función */
//** si solo tiene un argumento se elimina la palabra function y las llaves */
const fecha = () => new Date();

//** funciones flecha con parámetros */
const sumarTres = (x) => x + 3;
console.log(sumarTres(4));

//** normal */
const concatenarArreglos = function(arr1, arr2) {
  return arr1.concat(arr2);
}
console.log(concatenarArreglos([1,2],[3,4,5]));

//** con flecha */
const concatenarArreglosFlecha = (arr1, arr2) => arr1.concat(arr2);
console.log(concatenarArreglosFlecha([1,2],[3,4,5]));

//** si tiene más de una linea hay que usar los parámetros */
const sumar = (a, b) => {
  let num = 6;
  return a + b + num;
};  
console.log(sumar(1,1));

//** valores por defecto para parámetros */
const incrementar = (num, valor = 1 ) => num + valor;
console.log(incrementar(5));

//** operador rest*/
//** combierte todos los elementos en elementos de un arreglo*/
//** el nombre no nesesariamente tiene que ser args */
function miFuncion(...args) {
  console.log(args.length);
}
miFuncion(1,2,3,"más", [1,2,3]); //** [] */

//** Ejem 2 */
const sum = (...args) => args.reduce((a,b) => a + b, 0); 
console.log(sum(1,2,5));

//** "spread operator", descompone un arreglo en elementos individuales y los asigna como parámetros*/
const NUMEROS = [1,2,3];
function sumar(x,y,z) {
  return x + y + z;
}
console.log(sumar(...NUMEROS));

