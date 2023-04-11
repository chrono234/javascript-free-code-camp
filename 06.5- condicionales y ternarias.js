
function retornarMinimo(x,y) {
  //*  if (x < y){
  //*    return x;
  //*  }else{
  //*    return y
  //*  }

  //** primero va la condicion
  //** luego el signo ?
  //** si es verdadero elige x si es falso y
  return x < y ? x : y
}

console.log( retornarMinimo(4,7));
console.log( retornarMinimo(8,2));
console.log( retornarMinimo(5,5));

let a = 5;
let b = 9;

console.log(a > b ? a + 2 : b * 3);  //** 27 */

//** Multiples operadores ternarios  */

function compararNumeros( a,b ) {

  //*    if (a == b) {
  //*      return "a y b son iguales"
  //*    }else if(a > b){
  //*      return "a es mayor que b"
  //*    }else {
  //*      return "b es mayor que a"
  //*    }

  return a == b ? "a y b son iguales" 
      :  a > b ?  "a es mayor que b"
      :  "b es mayor que a"
}

console.log(compararNumeros(15,15)); 