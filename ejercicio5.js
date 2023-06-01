//Ejercicio Nro 5*****************************
function evaluaedadparimpar(nroveri)
{
   if ((nroveri % 2) == 0) //evalua si es resto es 0=par o 1=impar
   {
      console.log('El Numero es PAR');
   } else  {
      console.log('El Numero es IMPAR');
   }
 }
 let nroveri = parseInt(prompt('Ingrese el Numero a verificar:'));
 evaluaedadparimpar(nroveri);

//fin ejercicio Nro 5**************************