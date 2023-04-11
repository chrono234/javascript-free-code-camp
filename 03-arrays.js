//** Iterar arrays
let miArreglo = [10,20,30];
console.log(miArreglo[0]); //** 10 */

//** suma */
let suma = miArreglo[0] + miArreglo[1] + miArreglo[2];
console.log(suma);

//** to update arrays, index 
let miArr = [10,20,30];
miArreglo[0] = 50;
console.log(miArr[0]);

//** arreglos anidados */

let arreglo = [[1,2,3],[4,5,6],[7,8,9]]
/*
Arreglo:           [[1,2,3],[4,5,6],[7,8,9]]
Indices:               0        1      2
Indices internos:    0 1 2   0 1 2   0 1 2
*/

console.log(arreglo[0]); //** [1,2,3]
console.log(arreglo[1][2]); //** 6 

//** agregar elementos
arreglo.push("elemento que le voy a agregar")

//** remover el ultimo elemento
//**  arreglo.pop()

//** se puede asignar a una variable para trabajar luego con ella */
let estaciones = ["invierno","verano","otoño","primavera"];
let estacion = estaciones.pop();

console.log(estaciones);
console.log(estacion);

//** remover el primer elemento */
estaciones.shift();
console.log(estaciones);

//** para agregar el primer elemento*/

estaciones.unshift("elemento que vamos a agregar al principio");


//** Ejercicio
let miListaDeCompras = [["cereal",3],["leche", 2], ["galletas", 4], ["pan", 5],["refresco", 7], ["pollo", 7]];

//** cereal */
console.log("voy a comprar " + miListaDeCompras[0][1] + " unidades de " + miListaDeCompras[0][0] + "." );

//** cereal */
console.log("voy a comprar " + miListaDeCompras[2][1] + " unidades de " + miListaDeCompras[1][0] + "." );

//** cereal */
console.log("voy a comprar " + miListaDeCompras[3][1] + " unidades de " + miListaDeCompras[2][0] + "." );


