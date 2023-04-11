
//** if(true) = siempre que se ejecute ese codigo */
if(true){
  console.log("la condición es verdadera");
}


//**  si se cumplen 2 condiciones if else la primera es la que se evalua
//** por que el programa se detiene en la primera condicion */
//** por eso hay que fijarse como se escribe las lineas */
//** si ninguna de las condiciones es verdadera se ejecuta el else */

function clasificarValor(valor) {
  let respuesta;
  switch (valor) {
    case 1:
      respuesta = "alpha";
      break;
    case 2:
      respuesta = "beta";
        break;
    case 3:
      respuesta = "gamma";
      break;
    case 4:
      respuesta = "delta";
      break;
    default:
      break;
  }
  return respuesta;
}
console.log(clasificarValor(1)); //** alpha


var producto = "helado"

function clasificarValor(producto) {
  switch (producto) {
    case "pizza":
      console.log("la pizza cuesta $10.55");
      break;
    case "hamburgueza":
      console.log("la hamburgueza cuesta $6.78");
        break;
    case "helado":
      console.log("El helado cuesta $6.78");
      break;
    default:
      break;
  }
}
clasificarValor(producto);

//** OPCION PREDETERMINADA ALA SENTENCIA SWITCH */

function seleccionarIdioma(valor) {
  let idioma;
  switch (valor) {
    case 1:
      idioma = "Español"
      break;
    case 2:
      idioma = "Francés"
        break;
    case 3:
      idioma = "Italiano"
      break;
    default:
      idioma = "Inglés"
      break;
  }
  return idioma;
}
console.log(seleccionarIdioma(10));

//** Casos multiples */
function clasificarVolumen(valor) {
  let volumen;
  switch (valor) {
    case 1:
      volumen = "bajo"
      break;
    case 2:
    case 3:
      volumen = "intermedio"
      break;
    case 4:
    case 5:
    case 6:
      volumen = "alto"
      break;
    default:
      break;
  }
  return volumen;
}
console.log(clasificarVolumen(5));

//** Reemplazar "if...else" por "switch"  */
//** Se sustituye por el valor del switch  */
function seleccionarIdioma(valor) {
  let idioma;
  switch (valor) {
    case 1:
      idioma = "Español"
      break;
    case 2:
      idioma = "Francés"
        break;
    case 3:
      idioma = "Italiano"
      break;
    default:
      idioma = "Inglés"
      break;
  }
  return idioma;
}
console.log(seleccionarIdioma(10));


function seleccionarIdioma(valor) {
  let idioma;

  if (valor == 1) {
    idioma = "Español"
  }
  if (valor == 1) {
    idioma = "Francés"
  }
  if (valor == 1) {
    idioma = "Italiano"
  } else {
    idioma = "Inglés"
  }

  return idioma;
}

console.log(seleccionarIdioma(10));