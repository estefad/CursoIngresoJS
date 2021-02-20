/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	var i = 0; //var i = 1
	//var i=variable de control(i,j,k)
	//siempre inician en 0; i =0

	while(i < 10) //(i < 11)
	{
		//alert(i);
		console.log((i+1) + " ") //sumo antes de contar
		i = i + 1; //contador


		/*i= i+1
		console.log(i + " ")*/
	}

	alert("fin de la funcion")
	
}//FIN DE LA FUNCIÓN



/*determinadas o indeterminadas*/

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