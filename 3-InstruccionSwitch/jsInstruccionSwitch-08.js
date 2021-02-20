//Ejercicio 8
/*Al seleccionar un destino informar 
si hace FRIO o CALOR en ese destino*/
//Dominguez Estefania


function mostrar()
{
	var destinoIngresado; 

	destinoIngresado = txtIdDestino.value;

	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			  alert("En este destino hace FRIO");
			  break;

	    case "Mar del plata":
	    case "Cataratas":
	          alert("En este destino hace CALOR");
	          break;	        		  
	}

}//FIN DE LA FUNCIÓN