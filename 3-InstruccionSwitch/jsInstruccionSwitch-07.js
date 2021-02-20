//Ejercicio 7
/*Al selecionar un destino , indicar el punto cardinal de
 nuestro pais en donde se encuentra Norte, Sur, Este u Oeste*/
 //Dominguez Estefania


function mostrar()
{
	var destinoIngresado 

	destinoIngresado = txtIdDestino.value;

	switch(destinoIngresado)
	{
		case "Bariloche":
			  alert("Este destino esta en el Este");
			  break;

	    case "Usuahia":
	          alert("Este destino esta en el Sur");
	          break;

	    case "Mar del plata":
	    	  alert("Este destino esta en el Oeste");
	    	  break;

	    case "Cataratas":
	          alert("Este destino esta en el Norte");
	          break;	        		  
	}

}//FIN DE LA FUNCIÓN