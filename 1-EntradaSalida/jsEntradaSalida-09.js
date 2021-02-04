/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

//Dominguez Estefania

function mostrarAumento()
{
	var sueldo;
	var resultado;
	var aumento //el porcentaje de aumento para sumar al sueldo original
    //el calculo de porcentaje de un valor, lo consigo 
    /* multiplicando el valor del porcentaje
      y lo divido por 100 */

	
	sueldo = txtIdSueldo.value;
	sueldo = parseInt(sueldo);

	aumento = sueldo * 10/100;
	//aumento = sueldo * 0,1;en este caso resolvi el 10/100

	resultado = sueldo + aumento
	//resultado = sueldo + (sueldo * 0,1);
	//resultado = sueldo * 1.1

	txtIdResultado.value = resultado;
}


//forma1: tengo que obtener solo un pedacito del sueldo, tengo que transformar ese 10% en una operacion, regla de tres en este caso