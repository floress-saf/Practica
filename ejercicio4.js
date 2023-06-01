//Ejercicio Nro 4*****************************
//4-Si voy al supermercado a comprar “Chocolates” y el valor de la caja es 100, debo calcular
//el iva que es de $16. Genera un programa que calcule el total de la caja de chocolates y su
//IVA e imprime el total de monto a abonar por el producto.
// Segun el enunciado interpreto que calcule 100(valor caja) y teniendo en cuenta que $16 es del IVA
// Entonces Valor de CAJA TOTAL =116 

var vcaja = 100;
var viva = 16;

function calculavalorcaja(vcaja, viva)
{
  var valototal = vcaja + viva;
  console.log('El Total del valor de la CAJA es :' + valototal);
}
calculavalorcaja(vcaja,viva);

//fin ejercicio Nro 4**************************