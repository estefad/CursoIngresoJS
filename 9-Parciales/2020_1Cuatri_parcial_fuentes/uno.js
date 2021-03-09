//ejercicio2
/*

*/
//Dominguez Estefania1h


function mostrar()
{
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
  contador=0;
  contador=0;
  contador=0;
  contador=0;
  contador=0;
  contador=0;

  acumulador=0;
  acumulador=0;
  acumulador=0;



VALIDACIONES
  while(respuesta == "si")
   {
  	    tipoProducto = prompt("Ingrese productos: , , ");
		while(isNaN(tipoProducto)==false || tipoProducto!="" && tipoProducto!="" && tipoProducto!="")
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
	

		switch()
		{
			case "":
			contador++ y/o acumuladorJapon+cantidadVendida
			ej total=total+precioTotal
				break;

			case ""
			
				break;

			case "":
				
				break;
		}

		respuesta=promprt("desea continuar ingresando: si/no")
	}

}



























/*
Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la
UTN FRA, los datos solicitados son:

nombre
tipo cursada("libre", "presencial", "remota")
cantidad de materias(mas de 0 y menos de 8)
nombre
sexo(femenino, masculino, no binario)
nota promedio(entre 1 y 10)
edad(validar)

se debe informar de existir o informar que no existe, en el caso que corresponda
a)El nombre del mejor promedio que no sea masculino -contador sexo y acumulador nota, la mejor es
b)El nombre del mas joven de los alumnos entre los que la dan libre
c)el promedio de nota por sexo
d)la edad y nombre de quien cursa mas materias que no sea en forma remota


var respuesta;
  var tipoCursada;
  var cantidadMaterias;
  var sexo;
  var nota;
  var edad;
  var nombreAlumno;
  var acumuladorNotaFemenino;
  var contadorFemenino;
  var acumuladorNotaMasculino;
  var contadorMasculino;
  var acumuladorNotaNoBinario;
  var contadorNoBinario; 

  var nombreMejorPromedio;
  //var nombreMejorPromedioNb;
  var MejorPromedio;
 // var mejorPromedioNb;
  var contadorAlumnos;
 // var acumuladorNota;
  var contadorEdadLibre;

  var promedioMasculino;
  var promedioFemenino;
  var promedioNoBinario;

  var contadorPresencial;
  var contadorRemoto;
  var contadorEdadLibre;

  var contadorMasMaterias;
  var mayorCantidadMaterias;
  var nombreAlumnoConMasMaterias;
  var edadMayorCantidadMaterias;
  
  respuesta = "si";
  acumuladorNotaFemenino=0;
  contadorFemenino=0;
  acumuladorNotaMasculino=0;
  contadorMasculino=0;
  acumuladorNotaNoBinario=0;
  contadorNoBinario=0;
  contadorAlumnos=0;
  contadorEdadLibre=0;
  contadorMasMaterias=0;
  //acumuladorNota=0;


  while(respuesta == "si")
   {
  	    tipoCursada = prompt("Ingrese cursada: libre, presencial o remota ");
		while(isNaN(tipoCursada)==false || tipoCursada!="libre" && tipoCursada!="presencial" && tipoCursada!="remota")
		{
			tipoCursada = prompt("Reingres cursada");
		}

		nombreAlumno = prompt("Ingrese su nombre");
		while(isNaN(nombreAlumno)==false)
		{
			nombreAlumno = prompt("Reingrese un nombre valido");
		}

		cantidadMaterias = prompt("Ingrese cantidad de materias");
		cantidadMaterias = parseFloat(cantidadMaterias);
		while(isNaN(cantidadMaterias)==true || cantidadMaterias<0 && cantidadMaterias>8)
		{
			cantidadMaterias = prompt("Reingrese cantidad de materias");
			cantidadMaterias = parseFloat(cantidadMaterias);
		}

		sexo = prompt("Ingrese su sexo:");
		while(isNaN(sexo) == false || sexo != "femenino" && sexo != "masculino" && sexo != "no binario")
		{
			sexo = prompt("Ingrese un sexo valido");
		}

		edad = prompt("Ingrese su edad:");
		edad = parseInt(edad);
		while(isNaN(edad) == true || edad<18)
		{
			edad = prompt("Ingrese un edad valida");
			edad = parseInt(edad);
		}

		nota = prompt("Ingrese su nota:");
		nota = parseInt(nota);
		while(isNaN(nota) == true || nota < 0 && nota > 10)
		{
			nota = prompt("Ingrese un nota valida");
			nota = parseInt(nota);
		}
		//acumuladorNota=acumuladorNota+nota;

		switch(sexo)
		{
			case "femenino":
				acumuladorNotaFemenino=acumuladorNotaFemenino+nota;
				contadorFemenino++;
				break;

			case "masculino":
				acumuladorNotaMasculino=acumuladorNotaMasculino+nota;
				contadorMasculino++;
				break;

			case "no binario":
				acumuladorNotaNoBinario=acumuladorNotaNoBinario+nota;
			 	contadorNoBinario++;
			 	break;
		}
//b)El nombre del mas joven de los alumnos entre los que la dan libre -min edad
		switch(tipoCursada)
		{
			case "libre":
				if(contadorEdadLibre==0 || edadMasjoven<edad)
				{
					edadMasjoven=edad;
					nombreMasJoven=nombreAlumno
				}
				contadorEdadLibre++;
				break;

			case "presencial":
				contadorPresencial++
				break;

			case "remoto":
				contadorRemoto++;
			 	break;
		}
//a)El nombre del mejor promedio que no sea masculino -
		if(sexo!="masculino")
		{
			if(contadorAlumnos==0 || nota>MejorPromedio)
			{
				MejorPromedio=nota;
				nombreMejorPromedio=nombreAlumno;
			}						
		}	
		contadorAlumnos++;
//d)la edad y nombre de quien cursa mas materias que no sea en forma remota
		if(tipoCursada!="remoto")
		{
			if(contadorMasMaterias==0 || mayorCantidadMaterias<cantidadMaterias)
			{
				nombreAlumnoConMasMaterias=nombreAlumno;
				edadMayorCantidadMaterias=edad
			}
		}
		contadorMasMaterias++;

		respuesta=prompt("desea continuar ingresando: si/no")
	}

//c)el promedio de nota por sexo
	promedioFemenino=acumuladorNotaFemenino/contadorFemenino;
	promedioMasculino=acumuladorNotaMasculino/contadorMasculino;
	promedioNoBinario=acumuladorNotaNoBinario/contadorNoBinario;
	
	
  if(contadorFemenino==0 && contadorNoBinario==0)	
  {
  	console.log("no se ingresaron mejores promedios que mostrar")
  }
  else
  {
  	console.log("el alumno con mejor promedio no masculino es:" + nombreMejorPromedio);
  }
  if(tipoCursada!="libre")	
  {
  	console.log("no se ingresaron mejores promedios que mostrar");
  }
  else
  {
  	console.log("el mas joven de los alumnos que dan libre es: " + nombreMasJoven);	
  }

  console.log("el promedio por sexo es: femenino" + promedioFemenino + " masculino " + promedioMasculino + " no binario " + promedioNoBinario);
  if(contadorPresencial==0 && contadorEdadLibre==0)	
  {
  	console.log("no se ingresaron alumnos con mayor cantidad de materias que mostrar")
  }
  else
  {
  	console.log("el nombre del alumno cursante no remoto con mas cantidad de materias cursadas es:" + nombreAlumnoConMasMaterias + " y la edad es: " + edadMayorCantidadMaterias);
  }










































//ejercicio1
/*Debemos realizar la carga de una compra de 5(cinco)productos de desinfeccion, y de cada uno debo
obtener los sig datos:
el nombre del producto
el tipo de producto(validar "ALCOHOL", "IAQ" O "QUAT")
el precio(validar entre 100 y 300)
la cant de unidades(no puede ser 0 o negativo y no debe superar las 1000 unidades)
el tipo de inflamable("ignifugo", "combustible", "explosivo")
y la Marca.

se debe informar al usuario:
a)el promedio de cantidad por tipo de producto 
b)el tipo de inflamable con mas cant de unidades en el total de la compra
c)cuantas unidades de IAQ con precios menores a 200(inclusive) se 
compraron en total
d)la marca y tipo del mas caro de los productos



isNaN= para validar numero==true
isNaN= para validar string==false

var contadorDeProductos;
	var tipoProducto;
	var precio;
	var cantidadUnidades;
	var tipoInflamable;
	var marca;

	var acumuladorCantidadAlcohol;
	var acumuladorCantidadIaq;
	var acumuladorCantidadQuat;
	var contadorAlcohol;
	var contadorIaq;
	var contadorQuat;

	var promedioAlcohol;
	var promedioQuat;
	var promedioIaq;

	var acumladorIgnifugo;
	var cumuladorCombustible;
	var acumuladorExplosivo;

	var precioAlcohol;
	var precioIaq;
	var precioQuat;

	contadorDeProductos=0;
	acumuladorCantidadAlcohol=0;
	acumuladorCantidadIaq=0;
	acumuladorCantidadQuat=0;
	contadorAlcohol=0;
	contadorIaq=0;
	contadorQuat=0;
	acumladorIgnifugo=0;
	acumuladorCombustible=0;
	acumuladorExplosivo=0;

	while(contadorDeProductos < 5)
	{		
		tipoProducto = prompt("Ingrese un producto: alcohol, iaq o quat");
		while(isNaN(tipoProducto)==false || tipoProducto!="alcohol" && tipoProducto!="iaq" && tipoProducto!="quat") 
		{
			tipoProducto = prompt("Reingrese un producto valido:");
		}

		precio = prompt("Ingrese precio");
		precio = parseFloat(precio);
		while(isNaN(precio)==true || precio<100 && precio>300)
		{
			precio = prompt("Reingrese precio:");
		}

		cantidadUnidades = prompt("Ingrese cantidad");
		cantidadUnidades = parseInt(cantidadUnidades);
		while(isNaN(cantidadUnidades)==true || cantidadUnidades<0 && cantidadUnidades>1001)
		{
			cantidadUnidades = prompt("Reingrese cantidad:");
		}

		tipoInflamable = prompt("Ingrese un producto: ignifugo, combustible o explosivo");
		while(isNaN(tipoInflamable)==false || tipoInflamable!="ignifugo" && tipoInflamable!="combustible" && tipoInflamable!="explosivo") 
		{
			tipoInflamable = prompt("Reingrese un producto valido:");
		}

		marca = prompt("Ingrese marca");
		while(isNaN(marca)==false)
		{
			marca = prompt("Reingrese marca:");
		}
//a)el promedio de cantidad por tipo de producto 
		switch(tipoProducto)
		{
			case "alcohol": 
				acumuladorCantidadAlcohol=acumuladorCantidadAlcohol+cantidadUnidades;
				contadorAlcohol++;
//d)la marca y tipo del mas caro de los productos
				if(precioAlcohol<precio)
				{
					precioAlcohol=precio
					mensaje="el mas caro es alcohol y la marca es:" + marca
				}			    
				break;


			case "iaq":
//c)cuantas unidades de IAQ con precios menores a 200(inclusive) se compraron en total 
				if(precio<201)
				{
					acumuladorCantidadIaq=acumuladorCantidadIaq+cantidadUnidades;	
				}
				if(precioIaq<precio)
				{
					precioIaq=precio
					mensaje="el mas caro es IAQ y la marca es:" + marca
				}
				contadorIaq++;
				break;

			case "quat":
				acumuladorCantidadQuat=acumuladorCantidadQuat+cantidadUnidades;
				contadorQuat++;
				if(precioQuat<precio)
				{
					precioQuat=precio
					mensaje="el mas caro es QUAT y la marca es:" + marca
				}
				break;
		}

		switch(tipoInflamable)
		{
			case "ignifugo": 
				acumladorIgnifugo=acumladorIgnifugo+cantidadUnidades;			    
				break;

			case "combustible":
				acumuladorCombustible=acumuladorCombustible+cantidadUnidades;
				break;

			case "explosivo":
				acumuladorExplosivo=acumuladorExplosivo+cantidadUnidades;
				break;
		}

		contadorDeProductos++;
	}


//a)el promedio de cantidad por tipo de producto 
	promedioAlcohol=acumuladorCantidadAlcohol/contadorAlcohol;
	promedioQuat=acumuladorCantidadQuat/contadorQuat;
	promedioIaq=acumuladorCantidadIaq/contadorIaq;

//b)el tipo de inflamable con mas cant de unidades en el total de la compra
	if(acumladorIgnifugo>acumuladorCombustible && acumladorIgnifugo>acumuladorExplosivo)
	{
		mensaje="ignifugo";		
	}
	else
	{
		if(acumuladorCombustible>acumuladorExplosivo)
		{
			mensaje="combustible";	
		}
		else
		{
			mensaje="explosivo";
		}
	}
	
	document.write("el promedio por tipo de producto es: alcohol " + promedioAlcohol + "<br>" + "IAQ" + promedioIaq + "<br>"+ "QUAT" + promedioQuat + "<br>");
	document.write("el tipo de inflamable con mas cantidad de unidades es:" + mensaje + "<br>");
	if(tipoProducto!="iaq" && precio>201)
	{
		document.write("no se ingresaron IAQ por debajo de $200" + "<br>");
	}
	else
	{
		document.write("la cantidad de IAQ menores a $200  es " + contadorIaq + "<br>");		
	}
	document.write("la marca y tipo mas caro de producto es:" + mensaje + "<br>");
*/


















































































































































































//Ejercicio 1
/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") , 
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante 
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/
//Dominguez Estefania

//declaracion de variables
/*pedir productos(while) junto con, precio, marca 
cant y fabricante. validar segun la consigna. validar es hacer un while o condicion para que si o si se ejecute lo que pido*/

/*punto a:tengo que reconocer si el producto es alcohol, 
y recordar el precio, la cantidad y el fabricante del de menor precio
punto b: reconocer el tipo de producto con MAS UNIDADES y calcular
el promedio por compra (acumular las cant de cada tipo(alchool, barbijo;
jabon))= contador acumulador de productos
puntoc: unidades de jabon total(tengo que acumular la cant de jabones)

informar al usuario:*/


/*var contadorDeProductos;
	var tipoProducto;
	var precioIngresado;
	var marcaIngresada;
	var fabricante;
	var cantidadUnidades;
	var alcoholBarato;
	var alcoholBaratoFabricante;
	var contadorAlcohol;
	var acumuladorCantidadAlcohol;
	var contadorjabon;
	var acumuladorCantidadJabon;
	var acumuladorCantidadBarbijo;
	var contadorbarbijo;
	var promedio;

	contadorDeProductos = 0;
	contadorAlcohol = 0;
	acumuladorCantidadAlcohol = 0;
	contadorjabon = 0;
	acumuladorCantidadJabon = 0;
	contadorbarbijo = 0;
	acumuladorCantidadBarbijo = 0;
	
	while(contadorDeProductos < 5)
	{		
		tipoProducto = prompt("Ingrese un producto: barbijo, jabon o alcohol:");
		while(isNaN(tipoProducto)==false || tipoProducto!="barbijo" && tipoProducto!="jabon" && tipoProducto!="alcohol") //es&& poque si o si tienen que cumplirse las tres, sino, me pide reingrese el producto
		{
			tipoProducto = prompt("Reingrese un producto valido:");
		}

		precioIngresado = prompt("Ingrese precio");
		precioIngresado = parseFloat(precioIngresado);
		while(isNaN(precioIngresado)==true || precioIngresado<100 || precioIngresado>300)
		{
			precioIngresado = prompt("Reingrese precio:");
		}

		marcaIngresada = prompt("Ingrese marca");
		while(isNaN(marcaIngresada)==false)
		{
			marcaIngresada = prompt("Reingrese marca:");
		}

		fabricante = prompt("Ingrese fabricante");
		while(isNaN(fabricante)==false)
		{
			fabricante = prompt("Reingrese fabricante:"); 
		}

		cantidadUnidades = prompt("Ingrese cantidad");
		cantidadUnidades = parseInt(cantidadUnidades);
		while(isNaN(cantidadUnidades)==true || cantidadUnidades<0 || cantidadUnidades>1001)
		{
			cantidadUnidades = prompt("Reingrese cantidad:");
		}

		switch(tipoProducto)
		{
			case "alcohol": 
			//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
				//contadorAlcohol = contadorAlcohol + 1;
				if(contadorAlcohol == 0 || precioIngresado < alcoholBarato)
				{
					alcoholBarato = precioIngresado;

					alcoholBaratoFabricante = fabricante;

					acumuladorCantidadAlcohol = acumuladorCantidadAlcohol + cantidadUnidades;					
				}
					contadorAlcohol++;

				break;

//puntoc: unidades de jabon total(tengo que acumular la cant de jabones)
			case "jabon":
				acumuladorCantidadJabon = acumuladorCantidadJabon + cantidadUnidades;
				contadorjabon = contadorjabon + 1;
				break;

			case "barbijo":
				acumuladorCantidadBarbijo = acumuladorCantidadBarbijo + cantidadUnidades;
				contadorbarbijo = contadorbarbijo + 1;
				break;
		}

		contadorDeProductos++;
	}
	// B-Del tipo con mas unidades, el promedio por compra NO NECESITO CONTADOR,PORQUE USO LOS ACUMULADORES
	if(acumuladorCantidadAlcohol > acumuladorCantidadJabon && acumuladorCantidadAlcohol > acumuladorCantidadBarbijo)
	{
		promedio = acumuladorCantidadAlcohol / contadorAlcohol;			
	}
	else
	{
		if(acumuladorCantidadJabon > acumuladorCantidadAlcohol && acumuladorCantidadJabon > acumuladorCantidadBarbijo)
		{
			promedio = acumuladorCantidadJabon / contadorjabon;	
		}
		else
		{
			promedio = acumuladorCantidadBarbijo / contadorbarbijo;	
		}
	}
	

	document.write("la cantidad de alcohol Barato es : " + acumuladorCantidadAlcohol + " y " + " el fabricante es: " + alcoholBaratoFabricante + "<br>");
	document.write("el promedio por compra del tipo con mas unidades es : " + promedio + "<br>");
	document.write("el total de jabones es : " + acumuladorCantidadJabon + "<br>");
*/
/*fabricante = prompt("ingrese fabricante");
while(isNaN(fabricante) == false)//es false porque no voy a ingresar number, sino strings

tipoProductos = prompt("ingrese su producto: barbijo, alcohol o jabon");
		while(isNaN(tipoProductos) == false || tipoProductos!="barbijo" && tipoProductos!="jabon" && tipoProductos!="alcohol" )//validaciones me dice que lo que ingrese es numero
		{
			tipoProductos = prompt("Reingrese un producto valido");
		}
		*/




/*1 repetir (cargar 5 productos

 pido tipo, precio, cantidad(validar)

 pido marca y fabricante			



 a- Del más barato de los alcohol, la cantidad de unidades y el fabricante 
	si el alcohol y si es el mas barato
	    guardar la cantidad de unidades y el fabricante 
	fin si

 b) Del tipo con mas unidades, el promedio por compra
 	por un lado acumular cant de productos en funcion al tipo (if/switch)
 		contadores
 	 	acumuladobarbijo - acumjabones- acumalcoholes





termino de repetir

b) comparar 3 acumuladores para saber cual es el mayor, calculo promedio
	(se hace por fuera porque necesito esto solo una vez)

		*/
