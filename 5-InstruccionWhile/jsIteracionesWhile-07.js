//Ejercicio 7
/*Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.*/
//Dominguez Estefania 1h

function mostrar()
{
	var contadorNumerico = 0;
	var numeroIngresado;
	var acumulador = 0;
	var respuesta = "si";


	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseFloat(numeroIngresado);
		contadorNumerico = contadorNumerico + 1;
		acumulador = acumulador + numeroIngresado;

		respuesta = prompt("desea continuar ingresando?");
	}

	
	promedio = acumulador / contadorNumerico;


	txtIdSuma.value = "el resueltado de la suma es " + acumulador;
	txtIdPromedio.value = "el promedio es " + promedio;

}//FIN DE LA FUNCIÓN