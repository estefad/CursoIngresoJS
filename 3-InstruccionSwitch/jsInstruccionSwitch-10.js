//Ejercicio 10
/*una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, 
informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche*/

//Dominguez Estefania 1h



function mostrar()
{
	var estacionIngresada;
	var destino;

    estacionIngresada = txtIdEstacion.value;
    destino = txtIdDestino.value;

    switch(estacionIngresada)          
    {
    	case "Invierno":
    	      switch(destino)
    	      {
    	      	case "Bariloche":
    	              mensaje = "se viaja";
    	      		  break;

    		    case "Cataratas":
    		    case "Mar del plata":
    		    case "Cordoba":
              		  mensaje ="no se viaja";
             		  break;
    	      }
    	      break;

    	case "Verano":
    	      switch(destino)
    	      {
    		    case "Cataratas":
    	      	case "Mar del plata":
    	              mensaje = "se viaja";
    	      		  break;

    		    case "Cordoba":
    		    case "Bariloche":
              		  mensaje ="no se viaja";
             		  break;
    	      }
    	      break;

    	case "Otoño":
    	      switch(destino)
    	      {
    	      	case "Cataratas":
    	      	case "Mar del plata":
    	      	case "Bariloche":
    	      	case "Cordoba":
    	              mensaje = "se viaja";
    	      		  break;
    	      }
    	      break;

    	case "Primavera":
    	      switch(destino)
    	      {
    	      	case "Bariloche":
    	              mensaje ="no se viaja";
    	      		  break;

    	        case "Cataratas":
    	      	case "Mar del plata":
    	      	case "Cordoba":
    	              mensaje = "se viaja";
    	      		  break;
    	      }
    	      break;   	    	

    }	

    alert(mensaje);

}//FIN DE LA FUNCIÓN