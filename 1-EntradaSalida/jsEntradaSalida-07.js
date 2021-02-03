/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

//Dominguez Estefania

function sumar()
{	
	let num1;
	let num2;
	let suma;

	num1 = txtIdNumeroUno.value;
	num2 = txtIdNumeroDos.value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);

	suma = num1 + num2;

	alert("el resultado es: " + suma);	
}

function restar()
{
	let num1;
	let num2;
	let resta;

	num1 = txtIdNumeroUno.value;
	num2 = txtIdNumeroDos.value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);

	resta = num1 - num2;

	alert("el resultado es: " + resta);
}

function multiplicar()
{ 
	let num1;
	let num2;
	let multiplicar;

	num1 = txtIdNumeroUno.value;
	num2 = txtIdNumeroDos.value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);

	multiplicar = num1 * num2;

	alert("el resultado es: " + multiplicar);
}

function dividir()
{
	let num1;
	let num2;
	let division;

	num1 = txtIdNumeroUno.value;
	num2 = txtIdNumeroDos.value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);

	division = num1 / num2;

	alert("el resultado es: " + division);
}

