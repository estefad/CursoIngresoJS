//Ejercicio 9
/*una agencia de viajes debe sacar las tarifas de los viajes , 
se cobra $15.000 por cada estadia como base, se pide el ingreso 
 una estacion del año y localidad para vacacionar
  para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% 
cataratas y Cordoba tiene un descuento del 10% 
Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% 
cataratas y Cordoba tiene un aumento del 10% 
Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% 
cataratas tiene un aumento del 10% 
Mar del plata tiene un aumento del 10% 
y Cordoba tiene el precio sin descuento*/

//Dominguez Estefania

function mostrar()
{
	var estacionIngresada; 
	var destino;
	var estadia = 15000;
	/*var precioSinAumento;
	var precioSinDescuento;*/
	var aumentoDescuento;
	//var descuento;
	var precioTotal;
	//var precioTotalB;

	estacionIngresada = txtIdEstacion.value;
	destino = document.getElementById("txtIdDestino").value;
	estadia = parseInt(estadia);
	aumentoDescuento = parseInt(aumentoDescuento);
	//descuento = parseInt(descuento);

	switch(estacionIngresada)
	{
		case "Invierno":
		      switch (destino)
		      {
		      	case "Bariloche":
		      	      aumentoDescuento = 1.2;
		      	      break;

		        case "Cataratas":
		        case "Cordoba":
		        	  aumentoDescuento = 0.9;
		      	      break;

		      	case "Mar del plata":
		      		  aumentoDescuento = 0.8;
		      	      break;
		      }
		      break;
		      		      			   
     	case "Verano":
     		  switch (destino)
		      {
		      	case "Bariloche":
		      	      aumentoDescuento = 0.8;
		      	      break;

		        case "Cataratas":
		        case "Cordoba":
		        	  aumentoDescuento = 1.1;
		      	      break;

		      	case "Mar del plata":
		      		  aumentoDescuento = 1.2;
		      	      break;
		      }
		      break;
     		 

     	case "Otoño":
     	case "Primavera":
     		  switch (destino)
		      {
		      	case "Bariloche":
		        case "Cataratas":
		        case "Mar del plata":
		      		  aumentoDescuento = 1.1;	 //aumento	      		  
		      	      break;

		      	case "Cordoba":
		      	      alert("El precio para su destino es: " + estadia);
		      	      break;
		      }
		      break;
	}

	precioTotal = estadia * aumentoDescuento;
	//precioTotal = estadia + (estadia * aumento / 100);
    //precioTotal = estadia - (estadia * descuento / 100);

	alert("El precio para su destino es: " + precioTotal);

}//FIN DE LA FUNCIÓN