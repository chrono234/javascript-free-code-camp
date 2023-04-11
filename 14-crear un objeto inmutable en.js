let colores = {
  "verde":"#10e04b",
  "azul":"#1b50e0",
  "negro":"#000000",
  "blanco":"#ffffff",
};

//** queda inmutable */
Object.freeze(colores);

//** no se puede */
colores.amarillo = ["#fff200"];
colores.verde = ["#fff200"]
delete Object(colores)

