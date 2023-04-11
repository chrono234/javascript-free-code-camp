//** debemos saber cuál es el planeta de destino para este transbordador espacial */
//** EN UPPER CAMEL CASE */
class TransbordadorEspacial{
  constructor(planeta){
    this.planeta = planeta;
  }
}

let zeus = new TransbordadorEspacial("Júpiter");
console.log(zeus.planeta); //*Jupiter */

let apolo = new TransbordadorEspacial("Marte");
console.log(apolo.planeta); //**Marte */


class Mascota{
  constructor(nombre,edad){
    this.nombre = nombre;
    this.edad = edad;
  }
}

let miMascota = new Mascota("Nora", 5);

console.log(miMascota.edad);

//**getters y setters */
class Libro {
  constructor(autor){
    this._autor = autor; 
  }

    //** se ve el mensaje del getter por que se esta llamando al valor anónimo */
    //** se puede añadir un condicional */
  get autor(){
    console.log("Getter");
    return this._autor;
  }

  set autor(nuevoAutor){
    console.log("Setter");
    this._autor = nuevoAutor;
  }
}

const libro = new Libro("anónimo");
console.log(libro.autor);

libro.autor = "Ginno Smith";
console.log(libro.autor); 