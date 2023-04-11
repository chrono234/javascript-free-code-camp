//** variables*/

//** inicializar */
let x;

//** asignar */
let y = 8;

//** solo podemos asignar let una sola vez, con var si se puede escribir 2 veces, en las const no se puede
let campista = "james";
campista = "david"

console.log(campista);

let a; //** Son inicializadas con undefined por que no se ha asignado nada */
let b;

console.log(a);  //**undefined */

//**da error infinity */
let cociente = 3/0;
console.log(cociente);

//**Decimales son con . y no coma */

//** incrementar +1 */
let librosComprados = 105;
librosComprados++;
console.log(librosComprados);

//** reducir en 1*/
let numeroEstudiantes = 256;
numeroEstudiantes--
console.log(numeroEstudiantes);

//** vamos a incrementarla en más de 5 la variable, para restar es igual solo que con " -= " */
let increment = 23;
increment += 5;
console.log(increment);

//** multiplicar es " *=" y para dividir " /= " */
let i = 23;
i *= 2;
console.log(i);