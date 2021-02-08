/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let num1; //no conviene abreviar, usar el nombre que se
	let num2; //se entienda
	let suma; //conviene usar el nombre de la operacion


//entradas
	num1 = txtIdNumeroUno.value;
	num2 = txtIdNumeroDos.value;


//conversiones
	num1 = parseInt(num1);
	num2 = parseInt(num2);

	suma = num1 + num2;

	alert("el resultado es: " + suma);
}
//cuando no hago parseInt, el alert concatena, no suma
/*


*/





