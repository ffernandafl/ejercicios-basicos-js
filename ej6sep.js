//alert( 'hola' );
/*1.- Crear un programa que solicite al usuario su nombre por prompt y 
devuelva el siguiente saludo: 
"Hola nombre, saludos desde javascript". 
Nota: El saludo puede ser mostrado por consola o por html.*/

//var nombre = prompt('¿Cuál es tu nombre?');

//document.write('Hola, ', nombre.toUpperCase() , ', saludos desde JavaScript');
//Recuerda poner '+' o ',' para agregar la var con el texto
// .toUpperCase()--- Transforma todo el texto en mayúsculas
// .toLowerCase() -- Transforma todo el texto en minúsculas
// .toLocaleLowerCase()-Primera letra de cada palabra la hace minpuscula
//. toLocaleUpperCase()- Primera letra de cada palabra la hace mayúsula

/*2.- Crear un programa que solicite 2 números por prompt. 
Mandar esos dos valores a una función por 
parámetros para realizar las operaciones aritméticas básicas
( suma, resta, multiplicación y división), y mostrar el resultado.
Nota: El resultado puede ser mostrado por consola o por html.*/
//función por función
/*var num1 = parseInt(prompt('Ingresa la primera cantidad'));
var num2 = parseInt(prompt('Ingresa la segunda cantidad'));

function suma(num1,num2) {
    var resultado = num1 + num2;
    //console.log(resultado);
    document.write(resultado + '</br>');
}
    
suma(num1,num2)

function resta(num1,num2) { //estos num1 y num2 no son los mismos que el prompt, estos solo viven en esta parte+
    var resultado1 = num1 - num2;
    document.write(resultado1 + '</br>');
}

resta(num1,num2) //+ es por eso que aquí se les llama a los valores del prompt

function multiplicación(num1, num2) {
    var resultado2 = num1 * num2;
    document.write(resultado2 + '</br>');
}
multiplicación(num1,num2)

function división(num1, num2) {
   var resultado3 = num1 / num2
   document.write(resultado3 + '</br>');
}
división(num1,num2)*/
//en una sola función
function basic_ops(num1,num2) {
    suma = num1 + num2
    document.write('La suma de los numeros ' + num1 + ' y ' + num2 + ' es ' + suma + '</br>'
    )
    resta = num1 - num2
    document.write('La resta de los numeros ' + num1 + ' y ' + num2 + ' es ' + resta + '</br>')
    multiplicación = num1 * num2
    document.write('La multiplicación de los numeros ' + num1 + ' y ' + num2 + ' es ' + multiplicación + '</br>')
    división = num1 / num2
    document.write('La división de los numeros ' + num1 + ' y ' + num2 + ' es ' + división + '</br>')
}

var number1 = parseInt(prompt('Ingresa la primera cantidad'));
var number2 = parseInt(prompt('Ingresa la primera cantidad'));

basic_ops(number1,number2)