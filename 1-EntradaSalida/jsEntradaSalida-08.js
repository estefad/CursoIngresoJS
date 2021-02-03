/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
//Dominguez Estefania


function SacarResto()
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
}

//operador modulo % = me devuelve el resto de una division
//se utiliza para por ej saber si un num es par o impar, convertir decimal a binario,
//hay que calcular el resto de la division