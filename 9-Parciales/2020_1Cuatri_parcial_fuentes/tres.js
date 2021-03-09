  //ejercicio2
/*Una empresa que se dedica a la venta de productos tecnologicos, registra la siguiente informacion
de la cantidad de productos vendidos:

IdProducto (Entre 1 y 1000)
tipo (Drone - camara - Celular)
Origen (China - Tonga - Japon)
cantidad vendida por cada compra
peso en kg del paquete
Fecha de compra (alfanumerico)
precio unitario en dolares. 

Precio total: (el margen de ganancia para todos los productos es del 30%)
Se calcula para cada venta los siguientes impuestos (en caso de que corresponda):

Para los productos procedentes de Japon cuyo peso supere los 3 kg
 se le agrega un impuesto del 5% sobre el  total de la compra.ACUM

Para los productos procedentes de Tonga o China que superen ACUM
los 2 kg, se le agrega un impuesto del 10% sobre el total de la compra.

Para las demas combinaciones no aplica impuesto.
    
Se desea saber:
a) Total que recauda la empresa por productos vendidos procedentes de Tonga.
b) Porcentaje de productos vendidos de cada tipo.
c) Cantidad de productos de China
d) El pais que mas productos importa
e) Fecha, peso y tipo de la compra mas cara.
f) Sumando cantidad de drones y celulares, que porcentaje del total de productos vendidos representan?
g) IdProducto y Origen del ultimo Drone ingresado.
*/

//Dominguez Estefania 1h



function mostrar()
{
  
  var respuesta;
  var idProducto;
  var tipoProducto;
  var origen;
  var cantidadVendida;
  var pesoPaquete;
  var fechaCompra;
  var precioUnitario;
  var impuesto;

  var precioTotal;
  var total;
  var contadorDrone;
  var contadorCamara;
  var contadorCelular;
  var acumulaPrecioUnitario;

  var acumuladorJapon;
  var acumuladorTonga;
  var acumuladorChina;

  var contadorTonga;
  var totalTonga;
  var porcentajeTotalTonga;
  var contadorVendidos;

  respuesta = "si";
  contadorDrone=0;
  contadorCamara=0;
  contadorCelular=0;
  acumuladorJapon=0;
  acumuladorTonga=0;
  acumuladorChina=0;
  contadorTonga=0;
  contadorVendidos=0;

  while(respuesta == "si")
  {
  	    tipoProducto = prompt("Ingrese tipo: drone, camara, celular");
		while(isNaN(tipoProducto)==false || tipoProducto!="drone" && tipoProducto!="camara" && tipoProducto!="celular" ) 
		{
			tipoProducto = prompt("Reingrese un producto valido");
		}

		idProducto = prompt("Ingrese id de su producto");
		idProducto = parseFloat(idProducto);
		while(isNaN(idProducto)==true || idProducto<1 && idProducto>1000)
		{
			idProducto = prompt("Reingrese id:");
			idProducto = parseFloat(idProducto);
		}

		origen = prompt("Ingrese origen: china, tonga, japon");
		while(isNaN(origen)==false || origen!="china" && origen!="tonga" && origen!="japon" ) 
		{
			origen = prompt("Reingrese un origen valido");
		}

		precioUnitario = prompt("Ingrese precio");
		precioUnitario = parseFloat(precioUnitario);
		while(isNaN(precioUnitario)==true || precioUnitario<1)
		{
			precioUnitario = prompt("Reingrese precio:");
			precioUnitario = parseFloat(precioUnitario);
		}
		acumulaPrecioUnitario=acumulaPrecioUnitario+precioUnitario;

		cantidadVendida = prompt("Ingrese precio");
		cantidadVendida = parseFloat(cantidadVendida);
		while(isNaN(cantidadVendida)==true || cantidadVendida<1)
		{
			cantidadVendida = prompt("Reingrese precio:");
			cantidadVendida = parseFloat(cantidadVendida);
		}
		contadorVendidos++;

		pesoPaquete = prompt("Ingrese precio");
		pesoPaquete = parseFloat(pesoPaquete);
		while(isNaN(pesoPaquete)==true || pesoPaquete<1)
		{
			pesoPaquete = prompt("Reingrese precio:");
			pesoPaquete = parseFloat(pesoPaquete);
		}

		fechaCompra = prompt("Ingrese fecha de compra");
		while(isNaN(fechaCompra)==false)
		{
			fechaCompra = prompt("Reingrese precio:");	
		}

		precioTotal=precioUnitario*cantidadVendida*1.3//rl total mas el 30%

		switch(origen)
		{
//Para los productos procedentes de Japon cuyo peso supere los 3 kg
 //se le agrega un impuesto del 5% sobre el  total de la compra.			
			case "japon":
				if(pesoPaquete>3)
				{
					impuesto=1.05
				}
				acumuladorJapon+cantidadVendida;
				break;

//Para los productos procedentes de Tonga o China que superen ACUM
//los 2 kg, se le agrega un impuesto del 10% sobre el total de la compra.
			case "tonga":
				if(pesoPaquete>2)
				{
					impuesto=1.1
				}
				acumuladorTonga+cantidadVendida;
				contadorTonga++				
				break;

			case "china":
			if(pesoPaquete>2)
				{
					impuesto=1.1
				}
				acumuladorChina+cantidadVendida;
				break;
		}

		switch(tipoProducto)
		{
			case "drone":
				contadorDrone++;
				break;

			case "camara":
				contadorCamara++;
				break;

			case "celular":
				contadorCelular++;
				break;
		}

		respuesta=prompt("desea seguir ingresando: si/no");
	}

	total=precioTotal*impuesto;	
	//a) Total que recauda la empresa por productos vendidos procedentes de Tonga.
	totalTonga= contadorTonga+contadorVendidos;
	porcentajeTotalTonga=(contadorTonga * 100)/contadorVendidos;
}





























/*


Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
necesitan saber si es un gato o un perrro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra) 
la raza  (una palabra) 
el peso (peso validado) 
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal HASTA ACA VALIDAR E INGRESO DE DATOS

y nos piden informar solo si existe
a)El perro mas pesado MAX PERRO PESADO CONTA
b)El porcentaje de enfermos sobre el total de mascotas ACUMULA MASCOTAS Y ENFERMOS
c)El nombre de la ultima mascota de tipo "otra cosa" ACUM NOMBRE
d)El animal sin pelo con menor temperatura corporal MIN TEMP CONTA
e)Que tipo de mascota(gato o un perrro u "otra cosa") 
que tiene el mayor promedio de temperatura corporal PROMEDIO MAX TEMP
f)Sumando gatos y perros que porcentaje del total de mascotas son? CONTA
g)Que estado clinico tiene la menor cantidad de mascotas  MIN CANT MASCOTAS CONTA     
H)Cual es el promedio de kilos de peso de tomando todas las mascotas 
i)El nombre y raza del gato sin pelos mas liviano






	

/*var respuesta;
	var tipoMascota;
	var tipoPelaje;
	var edadMascota;
	var nombreMascota;
	var razaMascota;
	var peso;
	var estadoClinico;
	var temperaruta;

	var contadorGato;
	var contadorPerro;
	var contadorOtro;
	var contaSinPelo;
	var contadorCorto;
	var contadorLargo;

	var animalMenorTemperatura;
	var tipoMenorTemp

	var pesoMasPesado;
	var nombreMasPesado;

	var pesoGatoLiviano;
	var nombreGatoLiviano;
	var porcentajeEstado;
	var razaLiviano;

	//var acumuladorMascotas;;
	var nombreUltimo;
	var contadorMascotas;
	
	var contadorInternado;
	var contadorEnfermo;
	var contadorAdopcion;

	var acumuladorPeso;
	var promedioPeso;

	respuesta="si";
	contadorGato=0;
	contadorPerro=0;
	contadorOtro=0;
	contadorMascotas=0;
	contadorEnfermo=0;
	contadorInternado=0;
	contadorAdopcion=0;
	contaSinPelo=0;
	contadorCorto=0;
	contadorLargo=0;
	acumuladorPeso=0;

	while(respuesta=="si")
	{
		tipoMascota=prompt("ingrese mascota: gato, perro, otro");
		while(isNaN(tipoMascota)==false || tipoMascota!="gato" && tipoMascota!="perro" && tipoMascota!="otro")
		{
			tipoMascota=prompt("ingrese una mascota valida");
		}
		contadorMascotas++;
		//acumuladorMascotas=acumuladorMascotas+tipoMascota;

		nombreMascota=prompt("ingrese nombre");
		while(isNaN(nombreMascota)==false)
		{
			nombreMascota=prompt("ingrese un nombre valido");
		}

		razaMascota=prompt("ingrese raza");
		while(isNaN(razaMascota)==false)
		{
			razaMascota=prompt("ingrese una raza valida");
		}

		tipoPelaje=prompt("ingrese pelaje: corto, largo, sin pelo");
		while(isNaN(tipoPelaje)==false || tipoPelaje!="corto" && tipoPelaje!="largo" && tipoPelaje!="sin pelo")
		{
			tipoPelaje=prompt("ingrese un pelaje valido");
		}

		edadMascota=prompt("ingrese edad");
		edadMascota=parseInt(edadMascota);
		while(isNaN(edadMascota)==true || edadMascota<0)
		{
			edadMascota=prompt("ingrese una edad valida");
			edadMascota=parseInt(edadMascota);
		}

		estadoClinico=prompt("ingrese estado clinico: enfermo, internado o en adopcion");
		while(isNaN(estadoClinico)==false || estadoClinico!="enfermo" && estadoClinico!="internado" && estadoClinico!="adopcion")
		{
			estadoClinico=prompt("ingrese un estado valido");
		}

		temperaruta=prompt("ingrese temperaruta");
		temperaruta=parseInt(temperaruta);
		while(isNaN(temperaruta)==true || temperaruta<0)
		{
			temperaruta=prompt("ingrese temperaruta valido");
			temperaruta=parseInt(temperaruta);
		}

		peso=prompt("ingrese peso");
		peso=parseInt(peso);
		while(isNaN(peso)==true || peso<0)
		{
			peso=prompt("ingrese un peso valido");
			peso=parseInt(peso);
		}
		acumuladorPeso=acumuladorPeso+peso;

		switch(tipoMascota)
		{
			case "gato":
				if(contadorGato==1 || peso<pesoGatoLiviano && tipoPelaje=="sin pelo")
				{
					pesoGatoLiviano=peso;
					nombreGatoLiviano=nombreMascota;
					razaLiviano=razaMascota;
					contadorGato++
				}			
				break;

			case "perro":
				if(contadorPerro==1 || peso>pesoMasPesado)
				{
					pesoMasPesado=peso;
					nombreMasPesado=nombreMascota;
				}
				contadorPerro++;
				break;

			case "otro":
				contadorOtro++;	
				nombreUltimo=nombreMascota;
				break;
	    }
	    switch(estadoClinico)
	    {
	    	case "enfermo":
	    		contadorEnfermo++;
	    		break;

	    	case "internado":
	    		contadorInternado++;
	    		break;

	    	case "adopcion":
	    		contadorAdopcion++;
	    		break;
	    }

	    switch(tipoPelaje)
	    {
	    	case "sin pelo":
	    		if(contaSinPelo==1 || temperaruta<animalMenorTemperatura)
	    		{
	    			animalMenorTemperatura=temperaruta;
	    			tipoMenorTemp=tipoMascota;
	    		}
	    		contaSinPelo++;	    		
	    		break;

	    	case "corto":
	    		contadorCorto++
	    		break;

	    	case "largo":
	    		contadorLargo++
	    		break;

	    }


		  respuesta=prompt("desea continuar ingresando? : si/no");
	
	}	

	promedioPeso=acumuladorPeso/contadorMascotas;
	
	document.write("el perro mas pesado es: " + nombreMasPesado + "<br>");
	if(tipoPelaje!="sin pelo" && pesoGatoLiviano<peso)
	{
		document.write("no se ingresaron gatos sin pelo o livianos");
	}
	else
	{
		document.write("el gato mas liviano y sin pelo es: " + nombreGatoLiviano + " y la raza es: " + razaLiviano + "<br>");
	}
	if(estadoClinico!="enfermo")
	{
		document.write("no hay porcentaje de enfermos que mostrar" + "<br>");
	}
	else
	{
		porcentajeEstado=(contadorMascotas*contadorEnfermo)/100;
		document.write("el porcentaje de mascotas enfermas sobre el total es: " + porcentajeEstado + "<br>");
	}
	if(contadorOtro==0)
	{
		document.write("no hubo otras mascotas ingresadas" + "<br>");
	}
	else
	{
		document.write("el utimo nombre de otras mascotas es:" + nombreUltimo +  "<br>");
	}
	//d)El animal sin pelo con menor temperatura corporal 
	document.write("el animal sin pelo y con menor temperatura corporal es: " + tipoMenorTemp + "<br>")
	document.write("el promedio de peso de todas las mascotas es: " + promedioPeso + "kg" + "<br>");*/

