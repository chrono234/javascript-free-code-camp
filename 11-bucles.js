let i = 0;

while(i<=3){
  console.log("hola mundo");
  i++;
}

//** agregar los numeros entre o y 9 al arreglo*/
let miArreglo = [];
let a = 0;

while (a<10) {
  miArreglo.push(a);
  a++;
}
console.log(miArreglo);

//** numeros impares del 0 al 20 con un for*/
let arrEmpty = [];

for (let b = 1; b < 20; b += 2) {
  arrEmpty.push(b);
}
console.log(arrEmpty);

//** reto de escribir los pares entre 2 y 26 */
let arrEmpty2 = [];

for (let b = 1; b <= 26; b++) {
  if (b % 2 == 0) {
    arrEmpty2.push(b);
  }
}
console.log(arrEmpty2);

//** reto de escribir los pares entre 2 y 26, simplificado*/
let arrEmpty3 = [];

for (let b = 0; b <= 26; b += 2) {
    arrEmpty3.push(b);
}
console.log(arrEmpty3);

//** contar hacia atras con un ciclo for, se puede usar un -- -= /= */

for (let o = 15; o >= 10; 0 -= 2) {
  console.log([o]); 
}

let arr = [];

for(let y = 10; y >= 5; y--){
  arr.push(y)
}
console.log(arr);

//** sumar un array , console.log dentro de un ciclo se puede usar para visualizar las iteraciones*/
let ar = [4,6,8,2];
let total = 0

for (let l = 0; l < ar.length; l++) {
  total += ar[l];
}
console.log(total);

//* To toUpperCase

//* let lenguajes = ["javascript","java","python","c++"];
//* for (let l = 0; l < lenguajes.length; l++) {
//* console.log(lenguajes[l].toUpperCase());
//* }

//** para ver los pares en el arreglo */

function contarNumerosPares(arreglo) {
  let total = 0;

  for (let i = 0; i < arreglo.length; i++) {
    if(arreglo[i] % 2 == 0){
      total++;
    };
  }
  return total;
}

console.log(contarNumerosPares([6,2,4])); //** 3 

//** do while, siempre se va a ejecutar almenos una vez la secuencia de instrucciones y se sigue repitiendo si se cumple la condicion*/
//** en un while nunca se ejecutaría por que no cumple la condición */

let x;
x = 16;
do {
  console.log(x);
  x++; //** 17
} while (x < 10); //** es falsa y no continua por que es mayor a 10 */
