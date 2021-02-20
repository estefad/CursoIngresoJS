/*una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base,
 se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% 
Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10%
 Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10%
 Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento*/
 //Dominguez Estefania 1h


function mostrar()
{
    var estacionDelAño; 
	var destino;
	var estadia = 15000;
	var precioSinAumento;
	var precioSinDescuento;
	var aumento;
	var descuento;
	var totalA;
	var totalD;

	estacionDelAño = prompt("Ingrese la estacion del año");
	destino = prompt("ingrese su destino");
	estadia = parseInt(estadia);
	aumento = parseFloat(aumento);
	descuento = parseFloat(descuento);

	
	if(estacionDelAño == "Invierno")
	{
		if(destino == "Bariloche")
		{
			aumento = 0.2;
			mensaje = "El precio total de su destino con el 20% de aumento es ";
		}
		else
		{
			if(destino == "Cataratas" || destino == "Cordoba")
			{
			   descuento = 0.1;
			   mensaje = "El precio total de su destino con el 10% de descuento es ";		
			}
			else
			{
				if(destino == "Mar del plata")
				{
					descuento = 0.2;
					mensaje = "El precio total de su destino con el 20% de descuento es ";
				}
			}

		}
	}
	else
	{
		if(estacionDelAño == "Verano")
		{
			if(destino == "Bariloche")
			{
				descuento = 0.2;
				mensaje = "El precio total de su destino con el 20% de descuento es ";
			}
			else
			{
				if(destino == "Cataratas" || destino == "Cordoba")
				{
					aumento = 0.1;
			   		mensaje = "El precio total de su destino con el 10% de aumento es ";
				}
				else
				{
					if(destino == "Mar del plata")
					{
					  	aumento = 0.2; 
						mensaje = "El precio total de su destino con el 20% de aumento es ";	
					}
				}
			}
		}
		else
		{
			if (estacionDelAño == "Otoño" || estacionDelAño == "Primavera")
			{
				if(destino == "Bariloche" || destino == "Cataratas" || destino == "Mar del plata")
				{
					aumento = 0.1; 
					mensaje = "El precio total de su destino con el 10% de aumento es ";
				}
				else
				{
					if(destino == "Cordoba")
					{
						alert("El valor de su destino es: " + estadia)
					}
				}
			}
		}

	}

    if (aumento) 
    {
    	precioSinAumento = estadia * aumento;
	    totalA = estadia + precioSinAumento;
        alert(mensaje + totalA);	
    }  
    else
    {
    	precioSinDescuento = estadia * descuento;
	    totalD = estadia - precioSinDescuento; 
      	alert(mensaje + totalD);		
    }   

		 
}//FIN DE LA FUNCIÓN





/*2- con if
ingresar el nombre y los datos requeridos para calcular el IMC , e informar a la persona si es:
Bajo peso
Peso normal
Preobesidad
Obesidad I
Obesidad II
Obesidad III*/
//Dominguez Estefania 1h

	/*var peso;
	var altura;
	var IMC;

	peso = prompt("Ingrese su peso:");
	altura = prompt("Ingrese su altura:");

	peso = parseFloat(peso);
	altura = parseFloat(altura);
	IMC = parseFloat(IMC);

	IMC = peso / altura**2;

	if(IMC < 19)
	{
		mensaje = "Bajo peso";
	}
	else
	{
		if(IMC > 18 && IMC < 26)
		{
			mensaje = "Peso normal";
		}
		else
		{
			if(IMC > 25 && IMC < 29)
			{
				mensaje = "Preobesidad"
			}
			else
			{
				if(IMC > 29 && IMC <36)
				{
					mensaje = "Obesidad grado I";
				}
				else
				{
					if(IMC > 34 && IMC < 40)
					{
						mensaje = "Obesidad grado II";
					}
					else
					{
						if(IMC > 39)
						{
							mensaje = "Obesidad grado III";
						}
						
					}
				}
			}
		}
	}
	
	alert("su IMC es: " + IMC + " y equivale a: " + mensaje);*/







//Ejercicio 10
/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/
//Dominguez Estefania



/*var nota;
	
	nota = Math.round(Math.random()* 9 + 1);

	//if(nota == 9 || nota ==10 )
	if(nota >8)
	{
   
      alert("EXCELENTE " + nota);

	}
	else
	{

     if(nota > 3 && nota < 9)
     {
      
      alert("APROBÓ " + nota);
  
     }
     else
     {

      alert("Vamos, la proxima se puede " + nota)

     }

	}*/