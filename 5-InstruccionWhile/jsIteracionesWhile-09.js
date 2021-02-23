//Ejercicio 9 bis
/*Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el menor de los pares y el mayor de los negativos ingresados*/
//Dominguez Estefania 1h


function mostrar()
{	
	var banderaDelMenor = "es el primer menor";
	var banderaDelNegativo = "es el primer negativo";
	var numeroIngresado;
	var numeroMenorPar; 
	var numeroMayorNegativo = 0;
	//var numeroMinimo;
	//var numeroMaximo;
	var respuesta = "si";
	
	
	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado % 2 == 0)
		{	
			if(banderaDelMenor == "es el primer menor")	    	
			{
				numeroMenorPar = numeroIngresado;
		    }		
			banderaDelMenor = "no es el primer menor";			
		}

		if (numeroIngresado < numeroMayorNegativo)
		{
			if(banderaDelNegativo == "es el primer negativo")
			{
				numeroMayorNegativo = numeroIngresado;	
			}	
			banderaDelNegativo = "no es el primer negativo";	 
		}
					
		respuesta = prompt("desea continuar?");
	}

	txtIdMaximo.value = "El menor par es : " + numeroMenorPar;
	txtIdMinimo.value = "El mayor negativo es: " + numeroMayorNegativo;
}//FIN DE LA FUNCIÓN

/*flag o bandera: se usa para saber si pase por algun lugar especifico
del codigo. Conviene inicializarlo con un string""
bandera= "algo"
luego levanto bandera
bandera = "no es algo"
se escribe= flag=algo*/


/*function mostrar()
{	
	var banderaDelPrimero = "es el primero";
	var numeroIngresado;
	var numeroMenorPar; //inicializar variables sino no tiene con que compara max o min
	var numeroMayorNegativo;
	var respuesta = "si";
	//iniciar variables
	//banderaDelPrimero="es el primero"; //true o false o 0 y 1

	/*numeroMaximo = -1000;
	numeroMinimo = 1000; MAL, NO SE INICIALIZAN NUNCA LOS MAX Y MIN*/ 
	/*SE PONEN AL REVES PORQUE NECESITO QUE CUALQUIER NUM 
	QUE ESTE EN ESTE RANGO, SEAN EL MAX Y MIN AL MISMO TIEMPO, 
	LA PRIMERA VEZ QUE INGRESE UN NUM 
	
	
	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if(banderaDelPrimero == "es el primero" || numeroIngresado % numeroMenorPar)
		{
			numeroMenorPar = numeroIngresado;
			
		}
		if(banderaDelPrimero == "es el primero" || numeroIngresado % numeroMayorNegativo)
		{
			numeroMayorNegativo = numeroIngresado;
			banderaDelPrimero = "no es el primero"; /*si va dentro del if minimo
			                                         solo se ejecuta cada que encuentre un minimo,
			                                         aunque se ejecuta siempre en la primera iteracion
		}


		respuesta = prompt("desea continuar?");
	}


	txtIdMaximo.value = "El menor par es : " + numeroMenorPar;
	txtIdMinimo.value = "El mayor negativo es: " + numeroMayorNegativo;
/FIN DE LA FUNCIÓN*/






/*do
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);


		if(numeroIngresado > numeroMaximo)
		{
			numeroMaximo = numeroIngresado;
		}
		if(numeroIngresado < numeroMinimo)
		{
			numeroMinimo = numeroIngresado;
		}

		respuesta=prompt("desea continuar?");

	}while(respuesta=="si"); OPCION MENOS OPTIMA*/ 




	/*do
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if(bandera == "es el primero")
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			bandera = "no es el primero";
		}
		else
		{
			if(numeroIngresado > numeroMaximo)
		 {
			numeroMaximo = numeroIngresado;
		 }
		 if(numeroIngresado < numeroMinimo)
		 {
			numeroMinimo = numeroIngresado;
		 }	
		}
		

		respuesta=prompt("desea continuar?");

	}while(respuesta=="si"); MANERA UN POCO MEJOR*/
