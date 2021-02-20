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
	{
		numeroIngresado = prompt("ingrese un número entre 0 y 9");
		txtIdNumero.value = numeroIngresado;
		
	}


	/*if(numeroIngresado >= 0 || numeroIngresado < 10)
	{
		txtIdNumero.value = numeroIngresado;
	}
	else
	{
      alert("no es valido");
	}*/
}

/*VALIDACIONES
respetan ciertas reglas para estar validados*/

//estandarizar para convertir la entrada en mayus o minusc
/*dos metodos:algo.toLowerCase (a minusc)
              algo.toUpperCase (a mayusc)
*/