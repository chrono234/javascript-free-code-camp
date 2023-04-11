//** Descripción */
//** Con alt + z se visualiza el salto de linea */

//** En el juego de casino de blackjack el jugador puede sacarle ventaja ala casa llevando un registro del numero relativo de cartas altas y bajas que quedan en la baraja */

//** Esto se llama conteo de cartas */

//** Tener más cartas altas es una ventaja para el jugador. Se le asigna un valor a cada carta deacuerdo ala siguiente tabla */

//** -- Cuando el conteo es positivo, el jugador debería apostar alto */
//** -- Cuándo el conteo es 0 o negativo, el jugador debería apostar bajo */


//** Cambio de conteo      Cartas  */
//** --------------------------------------

//** +1                          2,3,4,5,6
//**  0                          7,8,9            //** no se incluyen en el switch por que no influyen en el conteo */
//** -1                          10,'J','K','A'

//** Nuestra meta es definir una funcion para contar cartas. */

//** La funcion debe tomar un parámetro carta que puede ser un numero o una cadena de caracteres y puede aumentar o reducir el valor de la variable de conteo deacuerdo al valor de la carta (observar la tabla) */

//** La funcion debe retornar una cadena de caracteres con el conteo actual y la cadena */

//** -- "Apostar" si el conteo es positivo*/
//** -- "Esperar" si conteo es 0 o negativo */

//** El conteo actual y la desicion del jugador */
//**("Apostar" o "Esperar" )  deben estar separados por un espacio */

let conteo = 0;

function contarCartas(carta) {
  let decision;

  switch (carta) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      conteo++;
      break;
    case 10:
    case 'J':
    case 'K':
    case 'A':
      conteo--;
          break;
    default:
      break;
  }

  if (conteo > 0) {
    decision = "Apostar";
  } else {
    decision = "Esperar"
  }

  return conteo + " " + decision;
}

console.log(contarCartas(2));
console.log(contarCartas(3));
console.log(contarCartas(7));
console.log(contarCartas("K"));
console.log(contarCartas("A"));




