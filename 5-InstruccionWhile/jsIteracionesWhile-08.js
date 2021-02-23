//Ejercicio8
/*Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
//Dominguez Estefania 1h

function mostrar()
{
	var contador = 0;
	var numerosIngresados;
	var respuesta = "si";
	var sumaPositivos = 0;
	var productoNegativos = 1;

	do
	{
		numerosIngresados = prompt("Ingrese un numero");
		numerosIngresados = parseInt(numerosIngresados);

		if(numerosIngresados > 0)
		{
			sumaPositivos = sumaPositivos + numerosIngresados;
		}
		else
		{
			productoNegativos = productoNegativos * numerosIngresados;
		}
		
		contador = contador + 1;
		respuesta = prompt("desea ingresar otro numero?");

	}while(respuesta == "si");	

	txtIdSuma.value = "el resultado de suma es: " + sumaPositivos;
	txtIdProducto.value = "el resultado de multiplicacion es: " + productoNegativos;

}//FIN DE LA FUNCIÓN

/*el acumulador me acumula en una unica variable, 
varios datos
acumulador= lo que este en la var + lo que ingrese la prox
es decir: acum = acum + numero

contador: incrementa o decrementa en valores fijos
acumulador: incrementa o decrementa en valores variables */

/*cuando sabemos de antemano cuantas iteraciones necesitamos
usamos for
cuando no sabemos cuantas iteraciones vamos a usar*/

/*do while: unica estructura de programacion que termina con ;
sirve para generar un code repetitivo que se tiene que ejecutar
por lo menos una vez (indeterminado)
do
{

}while(condicion); como aca termina el bloque,omitimos las llaves
do while: hacer esto, mientras se cumpla la condicion. La condicion
se evalua al final. CUANDO USAMOS DO WHILE, NO ES NECESARIO 
INICIALIZAR LA VAR*/