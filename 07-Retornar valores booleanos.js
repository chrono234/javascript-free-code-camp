//** Retornar valores booleanos

function funcionEsMenorQue(a,b){

//*    if (a<b) {
//*       return true;
//*     } else {
//*       return false;
//*     }

//* mejorado
return (a < b);
}

console.log(funcionEsMenorQue(3,3));

//** patron de retorno anticipado para evitar la ejecucion de la funcion */
//** Podemos usar la detencion de la funcion con el return para que no siga ejecutandose el codigo
//** si el condicional es falsa se ejecuta lo segundo */
//** con 25 la codicion es  falsa, la linea no se ejecuta y pasamos ala siguiente linea */
//** pero si lo cambiamos a -5 nos da undefined */

function calcularRaizCuadrada(num){
  if (num < 0) {
    return undefined;
  }
  return Math.sqrt(num)
  }
  
  console.log(calcularRaizCuadrada(-4));