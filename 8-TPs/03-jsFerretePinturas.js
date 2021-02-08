/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
//Dominguez Estefania


function FahrenheitCentigrados () 
{
	var tempF;
	var tempC;

	tempF = txtIdTemperatura.value;
    tempF = parseInt(tempF);

    tempC = tempF - 32 / 0.5;

    alert(tempF + " grados Fahrenheit son " + tempC + " grados Centígrados");

	
}

function CentigradosFahrenheit () 
{

	var tempC;
	var tempF;

	tempC = txtIdTemperatura.value;
    tempC = parseInt(tempC);

    tempF = (tempC * 0.5) + 32;

    alert(tempC + " grados Centígrados son " + tempF + " grados Fahrenheit");
	
}
