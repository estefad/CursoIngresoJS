/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/


function mostrar()
{
	var claveIngresada;
	var i = 0

	claveIngresada = prompt("ingrese el número clave.");

	while(claveIngresada!="utn750" && i < 2)
	{
		claveIngresada = prompt("Error. Intentelo de nuevo");
		i = i + 1;
	}

	if(claveIngresada == "utn750")
	{
		alert("Ingresó al sistema");
	}
	else
	{
		alert("Clave Bloqueada");	
	}
	
	
}//FIN DE LA FUNCIÓN

/*programar una estructura repetitiva que 
va a tener indeterminadas iteraciones
mientras la clave sea incorrecta, la voy a seguir 
pidiendo*/
/* Indeterminada: NO se cuantas iteraciones se llevan a cabo
Determinada: se cuantas iteraciones se llevan a cabo*/