//Ejercicio6
//Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
//Dominguez Estefania 1h


function mostrar()
{
	var contadorNumerico = 0;
	var acumulador = 0;
	var numeroIngresado;
	//var suma;
	var promedio;

	while(contadorNumerico < 5)
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseFloat(numeroIngresado);
		contadorNumerico = contadorNumerico + 1;
		acumulador = acumulador + numeroIngresado;
	}

	//suma = numeroIngresado + acumulador;
	promedio = acumulador / 5;
	
	txtIdSuma.value = "el valor de suma es " + acumulador;
	txtIdPromedio.value = "el valor de promedio es " + promedio;
	
	
}//FIN DE LA FUNCIÓN