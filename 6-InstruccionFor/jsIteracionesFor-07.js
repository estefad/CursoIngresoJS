//ejercicio 7
/*al presionar el botón pedir un número. mostrar los numeros 
divisores desde el 1 al número ingresado, y mostrar la cantidad 
de numeros divisores encontrados.*/
//Dominguez Estefania 1h

function mostrar()
{
	var i;
	var numeroIngresado;
	var numerosDivisores;

	numerosDivisores=0;


	numeroIngresado=prompt("ingrese un numero");
	numeroIngresado=parseInt(numeroIngresado);	

	numerosDivisores=parseInt(numerosDivisores);

	for(i=0; i<numeroIngresado; i++)
	{
		if(numeroIngresado % i == 0)
		{
			numerosDivisores++
			document.write(numeroIngresado + " es divisor de: " + numerosDivisores + "<br>");
		}
	}
	
}


//FIN DE LA FUNCIÓN
/*var i;
var iteraciones;

iteraciones=prompt
iteraciones=parse

for(i=0; i<iteraciones(la cant de iteraciones max depende de lo que ingrese el usuario); i++)
{
	bloque de codigo;
}*/