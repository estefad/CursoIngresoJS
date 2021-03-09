  var respuesta;
  var 
  var 
  var 
  var 
  var 
  var 
  var 
  var 
  var 
  var 
  var 
  var 

  respuesta = "si";
 

  while(respuesta == "si")
  {
  	    tipoProducto = prompt("Ingrese ");
		while(isNaN(tipoProducto)==false || ) 
		{
			tipoProducto = prompt("Reingrese ");
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
				break;

				case "cemento": 
				break;
		}
		
  	respuesta = prompt("Desea cargar mas productos: si/no");
  }


  if()
  {
	
  }
  else
  {
    if()
	 {
		
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
  	if()
  	{
  	
  	}
  	else
  	{
  		
  	}
  }

  if()
  {
  	
  }
  else
  {
  	if()
  	{
  		
  	}
  	else
  	{
  		mensaje = 
  	}
  }

  document.write(+ "<br>");

  if () 
  {
	document.write( + "<br>");
  }
  else
  {
  	document.write(+ "<br>");
  }
 
  document.write( + "<br>");
  document.write( + "<br>");





/* var respuesta;
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
 var acumuladorLimpieza;
  var acumuladorComestible;
  var acumuladorOtro;
  var contadorStock;
  var contadorPedido;
  var contadorSinStock;
  var acumuladorStock;
  var acumuladorPrecio;

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
  acumuladorPrecio=0;
  acumuladorLimpieza=0;
  acumuladorComestible=0;
  acumuladorOtro=0;

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
    acumuladorPrecio=acumuladorPrecio+precioPorUnidad;

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
      case "nacional": 
        if(contadorNacional==0 || tipoStock=="con stock")
        {
          contadorNacional++;
        } 
        break;

      case "importado": 
        contadorImportado++;
        break;

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
      switch(tipoStock)
    {
      case "con stock":
      contadorStock++
        break;

      case "Pedido":
      contadorPedido++;
        break;

      case "sin stock":
      contadorSinStock++;
        break;
    }
    
      respuesta = prompt("Desea cargar mas productos: si/no");
  }


  if(contadorStock>contadorPedido && contadorStock>contadorSinStock)
  {
    if(procedencia=="nacional")
    {
      mensaje="con stock";
    }
  }
  else
  {
    if(contadorPedido>contadorComestible && procedencia=="nacional")
    {
      mensaje="pedido";
    }
    else
    {
      mensaje="sin stock";
    }
  }
 

  promedioNacional=acumuladorPrecio/contadorNacional;
  totalProductos=contadorLimpieza+contadorComestible+contadorOtro;
  PorcentajeElaborados=(contadorElaborado * totalProductos)/100;
 
 document.write("el producto  mas barato de los elaborados es" + nombreMasBarato + "<br>");
 document.write("el promedio de productos nacionales con stock es" + promedioNacional + "<br>");
 document.write("el porcentaje de elaborados por sobre el total  es" + PorcentajeElaborados + "<br>");
 document.write("de los tipos de stock el que tiene mas nacionales es" + mensaje + "<br>");
   

   * if (procedencia!="elaborado") 
  {
  document.write("no se registraron productos elaborados" + "<br>");
  }
  else
  {
     document.write("el producto  mas barato de los elaborados es" + nombreMasBarato + "<br>");
  }
  if(procedencia!="nacional" && tipoStock!="con stock")
  {
    document.write("no se ingresaron productos nacionales " + "<br>");
  }
  else
  {
    document.write("el promedio de productos nacionales con stock es" + nombreMasBarato + "<br>");
  }
   if(procedencia!="elaborados")
  {
    document.write("no se ingresaron productos elaborados " + "<br>");
  }
  else
  {
    document.write("el porcentaje de elaborados por sobre el total  es" + PorcentajeElaborados + "<br>");
  }
  */