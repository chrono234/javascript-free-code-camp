let perro = {
  "nombre": "Ginno",
  "edad": 5,
  "peso": 6,
  "raza":"Beagle"
};

let miObjeto = {
  5: "cinco"
};

//** acceder a las propiedades del objeto */

console.log(perro.edad); 5;

//** Acceder a las propiedades del objeto, con corchetes*/

let miCuaderno = {
  "color": "verde",
  "categoría": 3,
  "numero de paginas": 200,
  "numero de hojas": 100
}
console.log(miCuaderno["numero de paginas"]);


//** acceder a las propiedades por medio de variables, solo se puede hacer con corchetes*/

let propiedad = "numero de hojas";
console.log(miCuaderno[propiedad]);

//** agregar elementos, o quitar con .pop() */
let mochila = {
  "color":"azul",
  "tamaño":"mediano",
  "contenido": ["botella de agua", "cuaderno"]
}

mochila.color = "rojo";
mochila.contenido = []; //** si queremos cambiar todo el arreglo */
console.log(mochila.contenido.push("lápiz"));

//** */ añadir una cuarta propiedad */
let curso = {
  "titulo": "Aprender Javascrit desde cero",
  "idioma": "Español",
  "duración": 30
}

curso.vistas = 34500;
//** o usar [] curso[vistas] */
console.log(curso.vistas);

//** Borrar propiedades */
delete curso.duración

//** reemplazar switch con objetos */
function buscarElemetoQuimico(simbolo) {
  // let simbolosQuimicos = "";

  // switch(simbolo){
  //   case "AL":
  //     simbolosQuimicos = "Alumino"
  //     break;
  //   case "S":
  //     simbolosQuimicos = "Azufre"
  //     break;
  //   case "CL":
  //     simbolosQuimicos = "Cloro"
  //     break;
  //   case "He":
  //     simbolosQuimicos = "Helio"
  //     break;
  //   case "B":
  //     simbolosQuimicos = "Boro"
  //     break;
  //   default:
  //     break;
  // }
  const simbolosQuimicos = {
    "Al":"Alumino",
    "S": "Azufre",
    "CL": "Cloro",
    "He": "Helio",
    "B": "Boro"
  }
  return simbolosQuimicos[simbolo];
}

console.log(buscarElemetoQuimico("Al"));
console.log(buscarElemetoQuimico("S"));
console.log(buscarElemetoQuimico("CL"));
console.log(buscarElemetoQuimico("He"));
console.log(buscarElemetoQuimico("B"));

//** Eje */
let num1 = 1;
let num2 = 1;

function retornarComparacion(verdaderoFalso) {
  const mayorIgual = {
    Menor : num1 < num2 ,
    Mayor : num1 > num2,
    Igual : num1 === num2,
  }
    return mayorIgual[verdaderoFalso] || "ingrese un Mayor, Menor o igual para verificar";
}

console.log(retornarComparacion("Igual"));

//////////////////////////////////////////////////

//** asignar una propiedad default a un objeto */
function seleccionarIdioma(valor) {
  const asignarIdioma = {
    1:"Español",
    2:"Francés",
    3:"Italiano",
  }

  const asignarIdiomaDefault = "inglés";
  
  return asignarIdioma[valor] || asignarIdiomaDefault;
}

console.log(seleccionarIdioma(1));

//** */ verificar si la propiedad existe o no
let gato = {
  "color":"rojo",
  "raza": "red"
} 
console.log(gato.hasOwnProperty("color")); //** true */

//** ejemplo de una funcion que verifica la propiedad del objeto gato */
function verificarPropiedad(obj, propiedad) {
  if (obj.hasOwnProperty(propiedad)) {
    return "EL objeto tiene la propiedad: " + obj[propiedad];
  }else{
    return "el objeto no tiene esta propiedad"
  }
}
console.log(verificarPropiedad(gato, "color"));


//** Ojetos complejos, array de objetos */
//** cada uno de los objetos tiene un lugar en un arreglo
let moviles = [
{
  "marca":"nokia",
  "color":"blanco",
},
{
  "marca":"samsung",
  "color":"rojo",
}]

//** para acceder a los objetos se hace por el indice */
console.log(moviles[0]);
console.log(moviles[1]);

//** acceder a las propiedades de los objetos en el array */
//** es lo mismo de las dos maneras */
console.log(moviles[0].marca);
console.log(moviles[1]["marca"]);

//** objetos anidados se accede con ". ó []"  */
let carro = {
"marca":"honda",
"motor":{
  "cilindrage": 8000,
  "tipo":"injeccion"
},
}

console.log(carro.motor.tipo);
//** es lo mismo con los corchetes y se pude acceder por medio de una variable */
console.log(carro.motor[tipo]);


//** Objetos con arrays */
let misPlantas = [
  {
    tipo:"flores",
    lista: [
      "rosas",
      "tulipanes",
      "dientes de leon"
    ]
  },
  {
    tipo: "árboles",
    lista: [
      "abeto",
      "pino",
      "abedúl"
    ]
  }
]

let primeraFlor = misPlantas[0].lista[0];
console.log(primeraFlor);

let segundoArbol = misPlantas[1].lista[1];
console.log(segundoArbol);


