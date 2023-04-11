//** Tenemos un objeto que representa una colleccion de álbunes musicales */

//** Cada álbun tiene un número de identificacion único (id) asociado a otras propiedades*/

//** No todos los albunes tienen la informacion completa */

let colleccionDeDiscos = {
  7853: {
    tituloDeAlbun: "Bee Gees Greatest",
    artista: "Bee Gess",
    canciones: ["Stayin Alive"]
  },
  5439: {
    tituloDeAlbun: "ABBA Gold",
  }
};

//** Define una funcion actualizarDiscos que tome los siguentes parámetros:
//** - discos (el objeto que representa la colección de discos)
//** - id.
//** - propiedad ("artista" 0 "canciones")
//** - valor

//** tu meta es completar la funcion implementando las siguentes reglas para modificar el objeto pasado ala funcion:

//** *- Si el valor es una cadena vacía elimina la propiedad del albún correspondiente
//** *- Si la propiedad es igual ala cadena de caracteres canciones pero el albun no tiene una propiedad llamada "canciones", crea un arreglo vacío y agrega "valor" a ese arreglo"
//** *- Si la propiedad es igual ala cadena de caracteres canciones y "valor" no es una cadena vacía,  agrega "valor" al final del arreglo de canciones del albun correspondiente.
//** *- Si "valor" no es una cadena vacía y "propiedad" no es igual a "canciones" asigna el valor del parámetro "valor" ala propiedad.
//**    Si la propiedad no existe, debes crearla y asignar este valor.

function actualizarDiscos(discos,id,propiedad,valor) {
  if (valor === "") {
    delete discos[id][propiedad];
  }
  else if (propiedad === "canciones") {
    discos[id][propiedad] = discos[id][propiedad] || []; //** si es undefine agrega un arreglo vacío
    discos[id][propiedad].push(valor); 
  }else{
    discos[id][propiedad] = valor;
  }
}

console.log(colleccionDeDiscos[5439].canciones);  //** se ve undefne por que la propiedad canciones no existía */
actualizarDiscos(colleccionDeDiscos, 5439, "canciones", "Mamma mia"); //** lo agrega */
console.log(colleccionDeDiscos[5439].canciones); //** y aqui se ve */

console.log(colleccionDeDiscos[5439].artista);
actualizarDiscos(colleccionDeDiscos, 5439, "artista", "ABBA");
console.log(colleccionDeDiscos[5439].artista);