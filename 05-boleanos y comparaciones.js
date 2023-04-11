
//** "Tiene que escribirse en minuscula" */
console.log(true, false);

//** no deberiamos comparar arreglos con el operador == , tiene que ser con el === */
//* == , === , >= , <=, != , !== "desigualdad estricta"


console.log(9 == "9"); //** true */
console.log(9 == 9); //** true */
console.log(9 === "9"); //** false */

console.log( 1 !== "1"); //** true */

//** para comparar si las cadenas estan en orden alfabético */

console.log("a" > "b"); //** false */


console.log("ACB" > "ABC"); //** true , sigue con el siguiente para determinar */
console.log("Mundo">"Hola"); //** true, por que va después de hola alfabeticamente*/

//** Tabla de la verdad del operador and
//**la expresión solo es verdadera cuando ambos operadores son verdaderos */
/**
| X | Y | X && Y |
------------------
| T | T |    T   |
| T | F |    F   |
| F | T |    F   |
| F | F |    F   |
*/
//** Ejemplo */
var a = 8;
console.log((a>5)&&(a<10)); //** false, por que alguno de los valores es falso */


//** Tabla de la verdad del operador OR
/**
| X | Y | X OR Y |
------------------
| T | T |    T   |
| T | F |    T   |
| F | T |    T   |
| F | F |    F   |
*/

//** Tabla de la verdad del operador NOT
//** Para: !X
/**
| X |  !X |
-----------
| T | F |  
| F | T | 
*/

var a = 8;
//** !(a > 5) --> !true --> false
console.log( !(a>5));

//** !(a < 5) --> !false --> True
console.log( !(a<5));

//** Operador nullish ??*/

let inicialCounter = 0;

0 //** falsy

//** inicialCounter = inicialCounter || 25;
//** console.log(inicialCounter); //** 25 , hay que tener cuidado por que el valor es falso y ejecuta lo siguiente

inicialCounter = inicialCounter ?? 25;
console.log(inicialCounter); //** 0  , aqui si inicia el contador en cero

//** ell or se puede usar como un logical asignment ||= ??= pero se evalua solo si es necesario, queda bien para formukario
//** en ese caso es mejor usar el nullish
inicialCounter ??= 25;
console.log(inicialCounter);