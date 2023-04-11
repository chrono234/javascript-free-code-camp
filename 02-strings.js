//** comillas dentro de comillas */
let meta = "Aprender a programar con 'freeCodeCamp'";

//** secuencias de escape dentro de strings*/ 
/*

\' Comilla simple
\" comilla doble
\\ barra invertida
\n Linea nueva
\r Retorno de carro
\t Tabulación
\b Retroceso
\f Salto de página

*/
//** ejemplos */
console.log("estoy aprendiendo \\  javascript"); //** estoy aprendiendo \  javascript
console.log("estoy aprendiendo: \n  javascript");

//**Concatenar */

let mensajeCompleto = "Estoy aprendiendo a programar ";
let mensaje = "con freeCodeCamp";

console.log(mensajeCompleto); //** Estoy aprendiendo a programar

mensajeCompleto += mensaje;

console.log(mensajeCompleto); //** Estoy aprendiendo a programar con freeCodeCamp

//** Para ver la longitud de la cadena, ojo, si hay espacios se cuentan esos espacios */
let miCadena = "A";
console.log(miCadena.length); //** 1 */

//** para acceder aL indice de la cadena  0 , si usamos indices negativos nos da undefined */
let indices = "pasos";
console.log(indices[0]); //** p */

//** inmutabilidad "no se puede cambiar los caracteres individuales de la cadena de caracteres" , da TypeError */

//** eso es para acceder al último indice de la cadena */
let index = "pasos";
console.log(index[index.length -1]);
