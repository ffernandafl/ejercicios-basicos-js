/*Camila acaba de comenzar su nuevo rol como Desarrolladora Java Junior en un banco. 
Ella está trabajando en cuentas de clientes para una nueva aplicación de banca móvil.
Se le pide que implemente una función que muestre la cantidad mayor de tres cantidades
en la pantalla de inicio.*/

var num1 = prompt('Ingrese una cantidad');
var num2 = prompt('Ingrese una cantidad');
var num3 = prompt('Ingrese una cantidad');

var mayor = [num1, num2, num3];
mayor.sort();
document.write('El número mayor es ', mayor[2]);

