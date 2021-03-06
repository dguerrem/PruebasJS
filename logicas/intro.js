var nombre = "Davide";                       // String
var edad = 18;                              // int
var edadSumada = edad + 1;                  // int sumada
var colores = ["Azul","Amarillo","Verde"]   // Array
var animales = ["Gato", "Perro", "Pez"]     // Array
var usuario = {                             // Objeto
    nombre: "David",
    edad: "20",
    correo: "dacormo01@hotmail.com"
}
var estaCasado = true;                      // Booleano
var variableIndefinida;                     // Indefinida
var vacio = null;                           // Valor null

// ****************** GENÉRICO ****************** //
// Muestra por pantalla la variable
//alert(nombre);

// Pide un texto por teclado, con un segundo argumento pone un valor por defecto
// nombre = prompt("Introduce nombre: ");

// Muestra por consola el nombre
// console.log(nombre);

// Escribe en el HTML el nombre
// document.write(nombre);

// Concatena el texto
// document.write(nombre + " --> " + edadSumada);

// Muestra los elementos de un array
// document.write(colores[0] + ", " + colores[1]);

// Muestra los datos de un objeto
// document.write(usuario.nombre + ", " + usuario.edad);

// Declaración de múltiples variables a la vez
// var nombre = "David", ape1 = "Guerrero", ape2 = "Moreno"

// ****************** ARRAYS ****************** //
// Sobreescribe el valor de un elemento del array
// colores[0] = "Rojo";

// Muestra el tamaño del array.
// document.write("Existen: " + colores.length + " colores");

// Añade de manera dinámica un nuevo registro al array
// colores[colores.length] = "Violeta";

// Añade de manera ordenada nuevos objetos al final del array
// colores.push("Rojo", "Gris");

// Elimina del array el último elemento
// colores.pop();

// Concantena el valor de varios arrays.
// var nuevaLista = colores.concat(animales);

// Divide / separa los elementos del array para mejor visualización
// var coloresSeparados = (colores.join(" : "));

// Ordena los elementos del array
// var coloresOrdenados = colores.sort();
// document.write(coloresOrdenados);

// Ordena del revés los elementos del array
// var coloresOrdenadosReverse = colores.reverse();
// document.write(coloresOrdenadosReverse);

// ****************** CONDICIONES ****************** //
/* Sentencia IF básica
if (nombre=="Carlos") {
    document.write("Hola Carlos");
} else if (nombre=="David") {
    document.write("Hola David");
} else {
    document.write("No te conozco");
}*/

/* Sentencia IF múltiples condiciones
if (edad >= 18 && nombre=="David") {
    document.write("Eres David mayor de edad");
}*/

// ****************** BUCLES ****************** //
/* Sentencia básica de FOR
for (i = 0; i < colores.length; i++) {
    document.write(colores[i] + "<br>");
}*/

/* Sentencia básica de WHILE
var i = 0;
while (i < colores.length) {
    document.write(colores[i] + "<br>");
    i++;
}*/

/* Sentencia básica de DO WHILE
var i = 0;
do {
    document.write(colores[i] + "<br>");
    i++;
} while (i < colores.length)*/

// ****************** FUNCIONES ****************** //
/* Función simple sin argumentos
function saludo() {
    document.write("Bienvenido a la web, " + nombre);
}*/

/* Función simple con argumentos
function saludo(nombre, edad) {
    document.write("Bienvenido a la web, " + nombre + " tienes " + edad + " años");
}
saludo("Dguerrem", 16);*/

/* Función retornadora
function sumaNumeros (num1, num2) {
    return num1 + num2;
}
document.write(sumaNumeros(40,20));*/

// ****************** STRINGS ****************** //
/* Para obtener el número de caracteres
var caracteresPalabra = nombre.length;
document.write(caracteresPalabra);*/

/*Para cortar desde el caracter X
var caracteresPalabra = nombre.substring(2);
document.write(caracteresPalabra);*/

/* Para cortar desde el caracter X hasta el caracter Y
var caracteresPalabra = nombre.substring(2,6);
document.write(caracteresPalabra);*/

/* Obtiene la posicion de la cadena recibida por args
var caracteresPalabra = nombre.indexOf("D");
document.write(caracteresPalabra);*/

/* Reemplaca el texto A por el texto B
var caracteresPalabra = nombre.replace(nombre, "Pedro");
document.write(caracteresPalabra);*/

/* Convierte el texto A a mayúsculas
var caracteresPalabra = nombre.toUpperCase();
document.write(caracteresPalabra);*/

/* Convierte el texto A a minúsculas
var caracteresPalabra = nombre.toLowerCase();
document.write(caracteresPalabra);*/