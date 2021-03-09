//Ejercicio 10
/*Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos. pruebo antes de seguir
2-Suma de los positivos. ES ACUM
3-Cantidad de positivos. ES UN CONTADOR
4-Cantidad de negativos. CONTADOR
5-Cantidad de ceros. CONTADOR
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos).
10- minimo par y maximo negativo. NO ES NECESARIO BANDERA, YA QUE INICIE LOS CONTADORES
*/
//Dominguez Estefania 1h



/*todos los acumuladores y contadores se inicializan en gral
en 0*/
function mostrar() //ir programando y probando
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var acumuladorNegativos;
	var acumuladorPositivos;
	var cantidadNegativos;
	var cantidadPositivos;
	var cantidadCeros;
	var cantidadPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	var maximoNegativo;
	var minimoPar;

	respuesta = "si";
	acumuladorNegativos = 0; //se inicializa dsp de que se declara
	acumuladorPositivos = 0;
	cantidadPositivos = 0;
	cantidadNegativos = 0
	cantidadCeros = 0
	cantidadPares = 0 //solo cuando el proceso incluye a la misma 
	                   //variable, inicalizo la var

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero")
		numeroIngresado = parseInt(numeroIngresado);
		
		if(numeroIngresado < 0)
		{
			if(cantidadNegativos == 0 /*aca la bandera es el contador*/ || numeroIngresado>maximoNegativo)
			{
				maximoNegativo = numeroIngresado;
			}
			acumuladorNegativos = acumuladorNegativos + numeroIngresado;
			cantidadNegativos = cantidadNegativos + 1; 
		}
		 else//PREGUNTO SI EL NUMING ES POSITIVO O =0 POR DEFAULT
		{
			if(numeroIngresado > 0)
			{
				acumuladorPositivos = acumuladorPositivos + numeroIngresado;
				cantidadPositivos = cantidadPositivos + 1;
			}
			else
			{
				cantidadCeros = cantidadCeros + 1; //contador
			}
			
		}
		if(numeroIngresado % 2 == 0)
		{
			if(numeroIngresado < minimoPar/*cuando esto da true no se pregunta por el primer par*/ || cantidadPares == 0) //es el primer par
			{
				minimoPar = numeroIngresado;
			}			
			cantidadPares++ //contador
		}
		
		respuesta = prompt("desea continuar?");
	}//fin del while


	
	
	diferencia = acumuladorPositivos - acumuladorNegativos;

	document.write("la suma de los negativos es: " + acumuladorNegativos + "<br>");
	document.write("la suma de los positivos es: " + acumuladorPositivos + "<br>");
	document.write("la cantidad de los negativos es: " + cantidadNegativos + "<br>");
	document.write("la cantidad de los positivos es: " + cantidadPositivos + "<br>");
	document.write("la cantidad de ceros es: " + cantidadCeros + "<br>");
	document.write("la cantidad de pares es: " + cantidadPares + "<br>");

	if(cantidadPositivos != 0)
	{
		promedioPositivos = acumuladorPositivos / cantidadPositivos;
		document.write("el promedio de los positivos es: " + promedioPositivos + "<br>");
	}
	else
	{
		document.write("no se ingresaron numeros positivos" + "<br>");
	}
	if(cantidadNegativos != 0)
	{
		promedioNegativos = acumuladorNegativos / cantidadNegativos;
		document.write("no se ingresaron numeros negativos" + "<br>");
	}

	document.write("la diferencia entre negativos y positivos es: " + diferencia + "<br>");
}//FIN DE LA FUNCIÓN


/*
contador = contador + 1,2 etc
contador incrementa o decrmenta en valores fijos

acumulador = acumulador + algoingresado
acum incrementa o decrementa valores variables

validacion: isNaN(ALGO) = NO ES UN NUMERO?
SINO ES NUMERO. LE PIDO REINGRESAR AL USUARIO 

EJ while(isNaN(NUMINGRESADO))
{

}
*/