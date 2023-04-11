function generarFraccionAleatorio() {
  return Math.random(); //** entre 0 y 1, sin numeros enteros */
}

console.log(generarFraccionAleatorio());
console.log(generarFraccionAleatorio());
console.log(generarFraccionAleatorio());

let numeroAleartorio = Math.random();
console.log(numeroAleartorio);

//** nunca sería 20 llega a 19 */
let generarEntero0y19 = Math.floor(Math.random() * 20); 
console.log(generarEntero0y19);

//** ejem 2*/
function enteroAleatorio(limiteSuperior) {
  //** generar entre 0 y el limite superior sin incluirlo */
  return Math.floor(Math.random() * limiteSuperior)
}
console.log(enteroAleatorio(5)); 
//** con un for */
for (let i = 0; i < 15; i++) {
  console.log(enteroAleatorio(5)); 
}

//**generar aleatorios en un rango */

function rangoAleatorio(limiteSuperior, limiteInferior) {
  return Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1) + limiteInferior);
}
for (let i = 0; i < 15; i++) {
  console.log(rangoAleatorio(3,8));
}

//**PaseInt */
let a = parseInt("7");
let b = parseInt("5");


//** combertir a otro sistema numerico numero y la base "2" */
console.log(parseInt("110111", 2)); //** 55
console.log(parseInt(110111, 2)); //** 55

//** sistema hexadecimal solo se puede con comillas*/
console.log(parseInt("3E0A", 16)); //** 55


