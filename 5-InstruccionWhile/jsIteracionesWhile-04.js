/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
//Dominguez Estefania


function mostrar()
{
	var numeroIngresado;

	numeroIngresado = prompt("ingrese un número entre 0 y 9");
	numeroIngresado = parseInt(numeroIngresado);


	//while(!(numeroIngresado >=0 && numeroIngresado<=9))
	while(numeroIngresado > 10 || numeroIngresado < 0) 
		/*esta condicion se repite hasta que ingrese un num
	    del 0 al 9*/
	{
		numeroIngresado = prompt("ingrese un número entre 0 y 9");
		txtIdNumero.value = numeroIngresado;
		
	}

}

/*VALIDACIONES
respetan ciertas reglas para estar validados*/

//estandarizar para convertir la entrada en mayus o minusc
/*dos metodos:algo.toLowerCase (a minusc)
              algo.toUpperCase (a mayusc)
*/