//** promises */
//** Ejemplo 1 */
const p = new Promise((resolve, reject) => {
  let suma = 2 + 6;
  return suma === 8 ? resolve("Correct") : reject("Error");
})

p.then(function (message) {
  console.log(message);
}).catch(function (err) {
  console.log(err);
})

//** Ejemplo 2 */
function miPromesa() {
  return new Promise((resolve, reject) => {
    let suma = 2 + 6;
    return suma === 8 ? resolve("Correct") : reject("Error");
  });
}

miPromesa().then(function (message) {
  console.log(message);
}).catch(function (err) {
  console.log(err);
})

//** Ejemplo 3 */

//** Estamos retornando una promesa al ejecutar la funcion mipromesa */
//** 3 */
function mostrarPhone(mensaje){
  return new Promise((resolve, reject) => {
    return mensaje ? resolve('Obtuviste un ' + mensaje.marca) : reject('Error');
  });
}

//** 1 */
function miPromesaCelular() {
  return new Promise((resolve, reject) => {
    let homeworkDone = true;
    let phone = {color: 'black', marca: 'Samsung'}
    return homeworkDone === true ? resolve(phone) : reject("Más suerte la próxima vez");
  });
}

//** 2 */
miPromesaCelular().then((message) => {
  return mostrarPhone(message)
}).then(function(respuesta){
  console.log(respuesta);
}).catch(function (err) {
  console.log(err);
})
