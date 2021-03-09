/*

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


(EJ SI PIDE EL MAX O MIN )

			case "": SOLO SI ES PARA UN CASE, EN CASO DE SER PARA MAS, EL IF FUERA DEL SWITCH
		 		if(contador==0 || precioPorUnidad<precioMasBarato O LA CONDICION A CUMPLIR)
		 		{
		 			precioMasBarato=precioPorUnidad;
		 			nombreMasBarato=nombreProducto;
		 		}
		 		contadorElaborado++;
		 		break;


(DEL TIPO CON MAS UNIDADES EL PROMEDIO POR COMPRA)

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



  promedioNacional=acumulador/contador;

porcentaje de productos (DEPENDE DE CUAL VA A SER EL CONTA) por sobre el total
	  totalProductos=contadorLimpieza+contadorComestible+contadorOtro;
 	 totalProductos=contadorElaborado+contadorImportado+contadorNacional;

PORCENTAJE POR SOBRE EL TOTAL (DEPENDE DE LO QUE PIDA)
 	 PorcentajeElaborados=(contadorElaborado * 100)/totalProductos;

TOTAL CON AUMENTO DEL 30 PARA CADA INGRESADO; DENTRO DEL WHILE;(TAMBIEN PUEDE SER QUE ESTE EN UNA CONDICION Y QUEDE AFUERA DEL BUCLE)
  Precio total: (el margen de ganancia para todos los productos es del 30%)
	precioTotal=precioUnitario*cantidadVendida*1.3//el total mas el 30% (en este caso es el 30)


	EJEMPLO PRECIO CON AUMENTO Y DESCUENTO
	 if (aumento) 
    {
    	precioSinAumento = estadia * aumento(DEPENDE LA CANT);
	    totalA = estadia + precioSinAumento;	
    }  
    else
    {
    	precioSinDescuento = estadia * descuento(DEPENDE LA CANT);
	    totalD = estadia - precioSinDescuento; 		
    }   

	document.write( + "<br>");
	document.write( + "<br>");
	document.write( + "<br>");


*/







































/*1. El alumno deberá ingresar

Nombre del alumno
Carrera (Programación, Psicología, Diseño gráfico)
Estado de la carrera: en curso-abandono-finalizado
Sexo (femenino-masculino-nobinario)
Edad (18 o más)
Nota (entre 1 y 10) HASTA ACA INGRESAR DATOS

2. Se desconoce la cantidad de alumnos que se ingresaran.
3. Se deberán validar los casos resaltados en negrita. (VALIDAR TODO)
4. El programa deberá informar a través del documento html:
A. Cantidad total de alumnos de cada carrera.
B. Cantidad total de mujeres que CURSAN (en curso) la carrera de programación
C. Cantidad de alumnos no binarios.
D. Promedio de notas de los alumnos finalizantes.
E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.)
G. ¿Cuál es la carrera que tiene más alumnos?*/


/*declaro variables

hago un bucle indefinido 
	ingreso datos por prompt(carrera, estado de la carrera, sexo, edad y nota)

	valido los datos ingresados
	de edad y nota, contadores

	a- acumular la cant de alumnos de cada carrera (tres contadores de carreras)

salgo del bucle indeterminado

muestro al usuario
*/



/*
var respuesta;
	var nombreAlumno;
	var carrera;
	var estadoCarrera;
	var sexo;
	var edad;
	var nota;
	var contadorPsicologia;
	var contadorProgramacion;
	var contadorGrafico;
	var contadorFemenino;
	var contadorMasculino;
	var contadorNoBinario;
	var contadorFemeninoEnCurso;
	var finalizantes;
	var promedio;
	var acumuladorNota;
	var contadorEstadoCarrera;
	var sexoDelMasViejo;
	var edadDelMasViejo;
	var nombreDelMasViejo;
	var notaMejorAlumno;
	var estadoMejorAlumno;
	var nombreMejorAlumno;
	var mayorAlumnado;
	//var banderaDelMejorAlumno;

	respuesta = "si";
	contadorProgramacion = 0;
	contadorPsicologia = 0;
	contadorGrafico = 0;
	contadorFemenino = 0;
	contadorMasculino = 0;
	contadorNoBinario = 0;
	contadorFemeninoEnCurso = 0;
	finalizantes = 0;
	acumuladorNota = 0;
	contadorEstadoCarrera = 0;
	//banderaDelMejorAlumno = 0;

	while(respuesta == "si")
	{
		nombreAlumno = prompt("Ingrese su nombre:");
		nombreAlumno = nombreAlumno.toLowerCase();
		while(isNaN(nombreAlumno) == false)
		{
			nombreAlumno = prompt("Ingrese un nombre valido");
		}

		carrera = prompt("Ingrese su carrera:");
		carrera = carrera.toLowerCase();
		while(isNaN(carrera) == false || carrera != "programacion" && carrera != "psicologia" && carrera != "diseño grafico")
		{
			carrera = prompt("Ingrese una carrera valida");
		}

		estadoCarrera = prompt("Ingrese su estado:");
		estadoCarrera = estadoCarrera.toLowerCase();
		while(isNaN(estadoCarrera) == false || estadoCarrera != "en curso" && estadoCarrera != "finalizado" && estadoCarrera != "abandono")
		{
			estadoCarrera = prompt("Ingrese un estado valido");
		} contadorEstadoCarrera++;

		sexo = prompt("Ingrese su sexo:");
		sexo = sexo.toLowerCase();
		while(isNaN(sexo) == false || sexo != "f" && sexo != "m" && sexo != "no binario")
		{
			sexo = prompt("Ingrese un sexo valido");
		}

		edad = prompt("Ingrese su edad:");
		edad = parseInt(edad);
		while(isNaN(edad) == true)
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
		} acumuladorNota = acumuladorNota + nota;

		switch(carrera)
		{
			case "psicologia":
				contadorPsicologia++; //se puede reutilizar porque solo pasa una vez por el contador de psico, luego, ya empiea a evaluar por edades
				if(contadorPsicologia == 1 || edad > edadDelMasViejo)
				{
					edadDelMasViejo = edad;
					nombreDelMasViejo = nombreAlumno;
					sexoDelMasViejo = sexo;					
				}
				if(contadorPsicologia == 1 || nota > notaMejorAlumno && sexo == "no binario")
				{
					notaMejorAlumno = nota;
					nombreMejorAlumno = nombreAlumno;
					estadoMejorAlumno = estadoCarrera;
				}
				break;
//E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
//F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.)


			case "programacion":
				contadorProgramacion++;
				if (estadoCarrera == "en curso" && sexo == "f") 
				{
					contadorFemeninoEnCurso++;
				}
				break;

			case "diseño grafico":
				contadorGrafico++;
				break;
		}
		switch(sexo)
		{
			case "f":
				contadorFemenino++;
				break;

			case "m":
				contadorMasculino++;
				break;

			case "no binario":
			 	contadorNoBinario++;
			 	if(sexo == "no binario")
			 	{
			 		sexo = "no binario";
			 	}
			 	break;
		}

		if(estadoCarrera == "finalizado")
		{
			promedio = acumuladorNota / contadorEstadoCarrera; //acum o contador siempre dentro del while.
		}


		respuesta = prompt("desea introducir mas datos?: si/no");
	}
	if(contadorPsicologia > contadorProgramacion && contadorPsicologia > contadorGrafico)
	{
		mayorAlumnado = contadorPsicologia;
		mensaje = "psicologia";
	}
	else
	{
		if(contadorProgramacion > contadorPsicologia && contadorProgramacion > contadorGrafico)
		{
			mayorAlumnado = contadorProgramacion;
			mensaje = "programacion";
		}
		else
		{
			mayorAlumnado = contadorGrafico;
			mensaje = "diseño grafico";
		}
	}
	

	document.write("la cantidad de alumnos por carrera es: programacion: " + contadorProgramacion + "<br>" + " psicologia : " + contadorPsicologia + "<br>" + " diseño grafico " + contadorGrafico + "<br>");
	document.write("la cantidad de mujeres en  programacion es: " + contadorFemeninoEnCurso + "<br>" );
	document.write("la cantidad de alumnos no binario es: " + contadorNoBinario + "<br>" );
	if(estadoCarrera != "finalizado")
	{
		document.write("no hubo alumnos finalizantes que promediar" + "<br>" );

	}
	else
	{
		document.write("el promedio de nota de alumnos finalizantes es: " + promedio + "<br>" );

	}
	document.write("el alumno mas viejo de la carrera de psicologia es: " + nombreDelMasViejo + " es sexo "+ sexoDelMasViejo + " y tiene " + edadDelMasViejo + " años" + "<br>");
	document.write("el mejor de la carrera de psicologia es: " + nombreMejorAlumno + " con la carrera "+ estadoMejorAlumno + " y nota " + notaMejorAlumno + "<br>");
	document.write("la carrera con mas alumnado es: " + mensaje + "<br>");*/

