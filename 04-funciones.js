function mostrarMensaje() {
  console.log("hola mundo");
}

mostrarMensaje();

function sumar(x, y) {
  let suma = x + y;
  console.log("El resultado de " + x + " + " + y + " es: " + suma);
}

let x = 5;
let y = 10;

sumar(x, y);

//** La variable local tiene más prioridad que la variable global

let casa = "house";

function hogar() {
  let casa = "mi casa";
  console.log(casa);
}

hogar(); //** mi casa */

console.log(casa); //** global */

//** cuando se usa la palabra reservada return se tiene que incluir el console.log por que se esta retornando y no llamando por consola*/
function sum(a, b) {
  return a + b;
}
console.log(sum(1, 7)); //** 8 */

//** daría undefine por que por defecto las funciones muestran undefined */
function sum(a, b) {
  console.log(a + b); //** 8 */
}
console.log(sum(5, 3)); //** undefined */

//** guardar un resultado en una variable */
let resultado = sumar(5, 3); //** 8 */

//**asignar el valor retornado a una funcion */
function crearCadenaConMeta(lenguajeDeProgramacion) {
  return "Mi meta es aprender " + lenguajeDeProgramacion;
}

var miMeta = crearCadenaConMeta("Javascript");

console.log(miMeta); //** Mi meta es aprender Javascript */

//** va a reemplazar el primer elemento luego se va a remover el primer elemento */
function proximoEnLaFila(arreglo, elemento) {
  arreglo.push(elemento); //** agregar al final del arreglo
  return arreglo.shift(); //** remover el primer elemento
}

var miArreglo = [1, 2, 3, 4, 5];

//** el primer elemento se va a eliminar del principio y se va a llamar al final del arreglo */
//** y el elemento que se va a retornar es uno en la consola */
console.log("Antes: " + JSON.stringify(miArreglo)); //* [1,2,3,4,5,6]
console.log(proximoEnLaFila(miArreglo, 6)); //* 1
console.log("Después: " + JSON.stringify(miArreglo)); //** [2,3,4,5,6]
