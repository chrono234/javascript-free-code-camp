const crearPersona = (nombre, edad, idioma) => {
  return {
    nombre: nombre,
    edad: edad,
    idioma: idioma,
  };
};

console.log(crearPersona("Ginno Smith", 28, "español"));

//** mejor forma */
const crearPersonaRefactorada = (nombre, edad, idioma) => ({
  nombre,
  edad,
  idioma,
});

console.log(crearPersonaRefactorada("Ginno Smith", 28, "español"));

//** funciones dentro de los objetos */
//** este es el estandar viejo */
const crearPersona2 = {
  nombre: "Isabel",
  presentarse: function() {
    return `Hola mi nombre es ${this.nombre}.`;
  },
};
console.log(crearPersona2.presentarse());

//**nuevo */
const crearPerson = {
  nombre: "Isabel",
  presentarse() {       //** se modifica esta parte */
    return `Hola mi nombre es ${this.nombre}.`;
  },
};
console.log(crearPersona2.presentarse());
