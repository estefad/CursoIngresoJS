/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
//Dominguez Estefania


/*function SacarResto()
{
	var NumeroDividendo;
	var NumeroDivisor;
	var resto;

	NumeroDividendo = txtIdNumeroDividendo.value;
	NumeroDivisor = txtIdNumeroDivisor.value;

	NumeroDividendo = parseInt(NumeroDividendo);
	NumeroDivisor = parseInt(NumeroDivisor);

	resto = NumeroDividendo % NumeroDivisor;

	alert("el resultado es: " + resto)
} */

//operador modulo % = me devuelve el resto de una division
//se utiliza para por ej saber si un num es par o impar, convertir decimal a binario,
//hay que calcular el resto de la division



//Dominguez Estefania division 1h
/*Se pide:
mostrar por console.log:
a) La suma de los dos numeros
b) El promedio de los numeros.
c) El modulo de los numeros (el primero en modulo del segundo)*/



function SacarResto()
{
  var numero1;
  var numero2;
  var suma;
  var promedio;
  var modulo;

  numero1 = txtIdNumeroDividendo.value;
  numero2 = txtIdNumeroDivisor.value;

  numero1 = parseFloat(numero1);
  numero2 = parseFloat(numero2);

  suma = numero1 + numero2;
  promedio = (numero1 + numero2) / 2;
  modulo = numero1 % numero2;

  mensaje = "la suma es: " + suma + ", el promedio es: " + promedio;
  mensaje = mensaje + " y el modulo es: " + modulo;

  console.log(mensaje);

}




