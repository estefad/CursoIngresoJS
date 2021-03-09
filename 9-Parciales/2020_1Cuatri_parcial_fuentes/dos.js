//Ejercicio 2
/*Realizar el algoritmo que permita ingresar los datos de una compra 
productos de la construccion, hasta que el cliente quiera:
Tipo validar("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/

//Dominguez Estefania 1h


function mostrar()
{
  
  var respuesta;
  var tipoProducto;
  var precioPorUnidad;
  var cantidadDeBolsas;
  var acumuladorSinDescuento;
  var contadorArena;
  var acumuladorCemento;
  var contadorCemento;
  var acumuladorCal;
  var contadorCal;
  var descuento;
  var totalSinDescuento;
  var totalDescuento;
  var tipoMayorUnidades;

  respuesta = "si";
  acumuladorSinDescuento = 0;
  acumuladorBolsasArena = 0;
  acumuladorCemento = 0;
  acumuladorCal = 0;
  contadorArena = 0;
  contadorCemento = 0;
  contadorCal = 0;

  while(respuesta == "si")
  {
  	    tipoProducto = prompt("Ingrese un producto: arena, cal o cemento:");
		while(isNaN(tipoProducto)==false || tipoProducto!="arena" && tipoProducto!="cal" && tipoProducto!="cemento") //es&& poque si o si tienen que cumplirse las tres, sino, me pide reingrese el producto
		{
			tipoProducto = prompt("Reingrese un producto valido:");
		}

		precioPorUnidad = prompt("Ingrese precio");
		precioPorUnidad = parseFloat(precioPorUnidad);
		while(isNaN(precioPorUnidad)==true || precioPorUnidad<1)
		{
			precioPorUnidad = prompt("Reingrese precio:");
			precioPorUnidad = parseFloat(precioPorUnidad);
		}

		cantidadDeBolsas = prompt("Ingrese cantidad");
		cantidadDeBolsas = parseInt(cantidadDeBolsas);
		while(isNaN(cantidadDeBolsas)==true)
		{
			cantidadDeBolsas = prompt("Reingrese cantidad:");
			cantidadDeBolsas = parseInt(cantidadDeBolsas);
		}

		totalSinDescuento = cantidadDeBolsas * precioPorUnidad;
		acumuladorSinDescuento = acumuladorSinDescuento + totalSinDescuento;

		switch(tipoProducto)
		{
			case "arena": 
				acumuladorBolsasArena = acumuladorBolsasArena + cantidadDeBolsas;
				contadorArena = contadorArena + 1;	
				break;

				case "cal": 
				acumuladorCal = acumuladorCal + cantidadDeBolsas;
				contadorCal = contadorCal + 1;	
				break;

				case "cemento": 
				acumuladorCemento = acumuladorCemento + cantidadDeBolsas;
				contadorCemento = contadorCemento + 1;	
				break;
		}
		
  	respuesta = prompt("Desea cargar mas productos: si/no");
  }


  if(cantidadDeBolsas > 10 && cantidadDeBolsas <30)
  {
	descuento = 0.15;
  }
  else
  {
    if(cantidadDeBolsas > 30)
	{
		descuento = 0.3;
	}
  }

  totalDescuento = acumuladorSinDescuento - (descuento * acumuladorSinDescuento);


  if(acumuladorBolsasArena > acumuladorCemento && acumuladorBolsasArena > acumuladorCal)
  {
  	tipoMayorUnidades = acumuladorBolsasArena;
  	mensaje = "arena";
  }
  else
  {
  	if(acumuladorCal > acumuladorBolsasArena && acumuladorCal > acumuladorCemento)
  	{
  		tipoMayorUnidades = acumuladorCal;
  		mensaje = "cal";
  	}
  	else
  	{
  		tipoMayorUnidades = acumuladorCemento;
  		mensaje = "cemento";
  	}
  }

  if(precioPorUnidad > cantidadDeBolsas && tipoProducto == "arena")
  {
  	tipoProducto = precioPorUnidad;
  	mensaje = "arena";
  }
  else
  {
  	if(precioPorUnidad > cantidadDeBolsas && tipoProducto == "cemento")
  	{
  		tipoProducto = precioPorUnidad ;
  		mensaje = "cemento";
  	}
  	else
  	{
  		mensaje = "cal";
  	}
  }

  document.write("El importe total de su compra es: " + acumuladorSinDescuento + "<br>");

  if (cantidadDeBolsas < 10) 
  {
	document.write("El precio no tiene descuento" + "<br>");
  }
  else
  {
  	document.write("El importe con descuento es: " + totalDescuento + "<br>");
  }
 
  document.write("El tipo de producto con mas unidades es: " + mensaje + "<br>");
  document.write("El tipo de producto mas caro es: " + mensaje + "<br>");

}
