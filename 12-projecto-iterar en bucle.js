//** vamos a definir una funcion que busque un contacto en una lista de contactos */

let contactos = [
  {
    nombre: "Nora",
    apellido: "Nav",
    numero: "0556945525",
    gustos: ["Pízza", "programacion"],
  },
  {
    nombre: "Harry",
    apellido: "Potter",
    numero: "7410214284",
    gustos: ["Howards", "Magia"],
  },
  {
    nombre: "Sherlok",
    apellido: "Homes",
    numero: "0415252622",
    gustos: ["Cosas interesantes", "Violin"],
  },
];

function buscarPerfil(nombre, propiedad) {
  for (let i = 0; i < contactos.length; i++) {
    if (contactos[i].nombre == nombre) {
      return contactos[i][propiedad] || "La propiedad no existe.";
    }
  }
    return "El contacto no esta en la lista de contactos"
}

console.log(buscarPerfil("Nora", "gustos"));
console.log(buscarPerfil("Harry", "apellido"));
console.log(buscarPerfil("Sherlok", "numero"));
console.log(buscarPerfil("Bob", "dirección"));
