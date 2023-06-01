// Ejercicio 10 ****************************
var array = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
var elementos = 0;
function evaluaarray(array)
{
   for (let indice = 0; indice < array.length; indice++) {

       elementos = elementos+ array[indice].length;
    }
}
evaluaarray(array);
console.log(elementos);
// Fin Ejercicio 10 ****************************