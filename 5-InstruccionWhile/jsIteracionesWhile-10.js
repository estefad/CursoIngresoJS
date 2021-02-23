//Ejercicio 10
/*Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
//Dominguez Estefania 1h

function mostrar()
{
	//declarar contadores y variables 
	var respuesta = "si";
	var numeroIngresado;
	var sumaNegativos = 1;
	var sumaPositivos = 0;
	var cantidadNegativos;
	var cantidadPositivos;
	var cantidadCeros;
	var cantidadPares;
	var promedioPositivos;
	var promedioNegativos;
	var restaPositivosNegativos;

	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero")
		numeroIngresado = parseInt(numeroIngresado);
		
		respuesta=prompt("desea continuar?");
	}//fin del while

	document.write("la suma de negativos es :"+sumaNegativos);
}//FIN DE LA FUNCIÓN