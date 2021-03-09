//ejercicio1
/*"super chino" :
Se pide el ingreso de mercadería de un supermercado , hasta que el usuario quiera,se pide :
tipo(limpieza , comestible , otros)solo estos tres tipos
nombre del producto
importe del producto (no mayor a 1000 pesos)
TipoDeStock("Pedido","sin stock", "con stock")
procedencia(importado, nacional, elaborado)
Peso (no mayor a 30 kilos)

informar SOLO SI HAY 


a)  el NOMBRE del  mas barato de los elaborados MIN ELABORADOS
b)  de los Productos nacionales con stock , el promedio de precio 
c)  el porcentaje de productos elaborados por sobre el total
d)  De los tipos de stock , cual tiene mas productos nacionales
*/
//Dominguez Estefania 1h


  var respuesta;
  var tipoProducto;
  var nombreProducto;
  var precioPorUnidad;
  var tipoDeStock;
  var procedencia;

  var nombreMasBarato;
  var precioMasBarato;
  var contadorElaborado;

  var contadorImportado;
  var contadorNacional;

  var contadorNacional;
  var promedioNacional;
  var acumuladorStock;

  var contadorLimpieza;
  var contadorComestible;
  var contadorOtro;
  var totalProductos;
  var PorcentajeElaborados;
 
  var contadorStock;
  var contadorPedido;
  var contadorSinStock;
  var acumuladorStock;
  var acumuladorNacionalStock;

  respuesta = "si";
  contadorElaborado=0;
  contadorImportado=0;
  contadorNacional=0;
  acumuladorStock=0;
  contadorLimpieza=0;
  contadorComestible=0;
  contadorOtro=0;
  contadorSinStock=0;
  contadorPedido=0;
  contadorStock=0;
  acumuladorNacionalStock=0;


   while(respuesta == "si")
   {
  	    tipoProducto = prompt("Ingrese productos: limpieza, comestible, otro");
		while(isNaN(tipoProducto)==false || tipoProducto!="limpieza" && tipoProducto!="comestible" && tipoProducto!="otro")
		{
			tipoProducto = prompt("Reingrese un producto valido ");
		}

		nombreProducto = prompt("Ingrese nombre del producto");
		nombreProducto = parseInt(nombreProducto);
		while(isNaN(nombreProducto)==false)
		{
			nombreProducto = prompt("Reingrese nombre de producto:");
		}

		precioPorUnidad = prompt("Ingrese precio");
		precioPorUnidad = parseFloat(precioPorUnidad);
		while(isNaN(precioPorUnidad)==true || precioPorUnidad<1 && precioPorUnidad>1000)
		{
			precioPorUnidad = prompt("Reingrese precio:");
			precioPorUnidad = parseFloat(precioPorUnidad);
		}
		//acumuladorPrecio=acumuladorPrecio+precioPorUnidad;

		tipoStock = prompt("Ingrese stock: pedido, con stock, sin stock");
		while(isNaN(tipoStock)==false || tipoStock!="pedido" && tipoStock!="con stock" && tipoStock!="sin stock") 
		{
			tipoStock = prompt("Reingrese ");
		}
		acumuladorStock=acumuladorStock+tipoStock;
		

		procedencia = prompt("Ingrese procedencia: nacional, importado o elaborado");
		while(isNaN(procedencia)==false || procedencia!="nacional" && procedencia!="importado" && procedencia!="elaborado") 
		{
			procedencia = prompt("Reingrese ");
		}
		

		switch(procedencia)
		{
//b)  de los Productos nacionales con stock , el promedio de precio 
//d)  De los tipos de stock , cual tiene mas productos nacionales		    
			case "nacional": 
				if(contadorNacional==0 || tipoStock=="con stock")
				{
					if(tipoStock=="con stock")
					{
						acumuladorNacionalStock=acumuladorNacionalStock+precioPorUnidad;
					}
					contadorNacional++;
				}
				if(tipoStock=="con stock")
				{
					mensaje="con stock";
					contadorStock++;
				}
				else
				{
					if(tipoStock=="sin stock")
					{
						mensaje="sin stock";
						contadorSinStock++;					
					}
					else
					{
						mensaje="pedido";
						contadorPedido++;
					}
				}	
				break;

			case "importado": 
				contadorImportado++;
				break;
//a)  el NOMBRE del  mas barato de los elaborados MIN ELABORADOS
		 	case "elaborado": 
		 		if(contadorElaborado==0 || precioPorUnidad<precioMasBarato)
		 		{
		 			precioMasBarato=precioPorUnidad;
		 			nombreMasBarato=nombreProducto;
		 		}
		 		contadorElaborado++;

				break;
		}
		switch(tipoProducto)
		{
			case "limpieza":
			contadorLimpieza++
				break;

			case "comestible":
			contadorComestible++;
				break;

			case "otros":
			contadorOtro++;
				break;
		}
		
  		respuesta = prompt("Desea cargar mas productos: si/no");
 	}



  promedioNacional=acumuladorNacionalStock/contadorNacional;
  //c)  el porcentaje de productos elaborados por sobre el total
  //totalProductos=contadorLimpieza+contadorComestible+contadorOtro;
  totalProductos=contadorElaborado+contadorImportado+contadorNacional;
  PorcentajeElaborados=(contadorElaborado * 100)/totalProductos;
 
 if()
 {
 	document.write("no se ingresaron productos en esta variable" + "<br>");
 }
 else
 {
 	document.write("el producto  mas barato de los elaborados es " + nombreMasBarato + "<br>");
 } 
 document.write("el promedio de productos nacionales con stock es" + promedioNacional + "<br>");
 document.write("el porcentaje de elaborados por sobre el total  es" + PorcentajeElaborados + "%" + "<br>");
 document.write("de los tipos de stock el que tiene mas nacionales es: " + mensaje + "<br>");
   