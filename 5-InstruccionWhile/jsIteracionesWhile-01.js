//Ejercicio 2 while
/*2. Mismo ejercicio, pero no se cuantos numeros se ingresan. (Lo decide el usuario). 
Mostrar tambien el promedio de los numeros que cumplen la condicion.*/
//Dominguez Estefania


function mostrar()
{
	var respuesta = "si"; //paso1
	var numeroIngresado;
	var acumulador = 0;
	var contadorNumerico = 0;
	//var contador10y20 = 0;
	var multiplicacion;
	var promedio;


	while(respuesta == "si") //paso2
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		contadorNumerico = contadorNumerico+ 1;
		acumulador = numeroIngresado + contadorNumerico;

		if(numeroIngresado > 9 && numeroIngresado < 21)
		{
			multiplicacion = numeroIngresado * acumulador;	
		}

		respuesta = prompt("Desea continuar?");	//paso3			
	}

	promedio = multiplicacion / acumulador;

	alert("el promedio de los numeros ingresados entre 10 y 20 es " + promedio);
			
}//FIN DE LA FUNCIÓN





//ejercicio 1 sabado 

/*var contadorNumerico = 0;´PASO1= INICIALIZO VARIABLE
	var numeroIngresado;
	var contadorMayorMenor = 0;


	while(contadorNumerico < 5) PASO2= CONDICIONO QUE MIENTRAS ESTA SE CUMPLE, SE VUELVE AL WHILE(BUCLE)
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

	
		if(numeroIngresado > 10 && numeroIngresado < 20)
		{
			contadorMayorMenor = contadorMayorMenor + 1;
			//contadorMayorMenor++

		}
		contadorNumerico = contadorNumerico + 1; PASO3= CAMBIO LA VAR DE CONTROL(HAGO FALSE EL WHILE)PARA
		                                                SALIR DEL BUCLE.
		 (va ultimo para salir del while)
				
	}
	alert (numeroIngresado + " es mayor que 10 " + " y " + numeroIngresado + " es menor que 20");
			alert siempre al final de todo, no se incluye en el while, esta fuera*/







/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/

/*var i = 0; //var i = 1
	//var i=variable de control(i,j,k)
	//siempre inician en 0; i =0

	while(i < 10) //(i < 11)
	{
		//alert(i);
		console.log((i+1) + " ") //sumo antes de contar
		i = i + 1; //contador


		/*i= i+1
		console.log(i + " ")*/
	
	

//*determinadas o indeterminadas*/

/*while(condicion = variable de control)
 la condicion me dice si elcodigo se repite 
 o no y cuantas veces se repite
(si es false, nunca entra en while)
{
	sentencia que quiero repetir..

	modificacion de variable de control
	para evitar el bucle infinito
	(hago false a la sentencia)
}
*/

/*//ej
	var contador = 0;
	var acumulador = 0; //promedio
	var promedio;
	var numeroIngresado;

	while(contador < 5)
	{
		contador = contador + 1;
		numeroIngresado = prompt("ingrese el numero " + contador + " ");

		acumulador = acumulador + numeroIngresado;
		//para dar el promedio
		//si lo hago afuera no anda
	}

	promedio=acumulador/contador;
	/*va afuera porque en el while esta contando*/