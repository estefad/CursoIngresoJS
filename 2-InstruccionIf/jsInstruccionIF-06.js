/*1-con if
pedir a una persoan que fue de vaciones , la distancia que viajo y el tiempo que tardo, para calcular la velocidad
e informar:
60 km/hr = muy lento
hata 80km/h= lento
hasta 100= buen ritmo
hasta 120= ahi de la ley
mas = eso no se hace*/
//Dominguez Estefania 1h


function mostrar()
{
	var distancia;
	var tiempo;
	var velocidad;
	

    distancia = prompt("Ingrese la distancia");
    tiempo = prompt("Ingrese el tiempo estimado");
    distancia = parseInt(distancia);
    tiempo = parseInt(tiempo);
    velocidad = parseInt(velocidad);

	velocidad = distancia / tiempo;

    if(velocidad < 61)
    {
    	mensaje="Usted va MUY LENTO";
    }
    else
    {
    	if(velocidad > 60 || velocidad < 81)
    	{
    		mensaje="Usted va LENTO";
    	}
    	else
    	{
    		if(velocidad > 80 || velocidad <101 )
    		{
    		   mensaje="Usted va a BUEN RITMO";
    		}
    	}	
    }
    if(velocidad > 100 || velocidad < 121)
    {
    	mensaje="Usted va AHI DE LA LEY";
    }
    else
    {
    	if(velocidad > 121)
    	{
    		mensaje="Eso NO se hace";
    	}
    }

    
    alert("su velocidad es :" + velocidad + " km/h " + mensaje);
    //console.log(mensaje);
  
}





//Ejercicio 6
/*Al ingresar una edad debemos informar si la persona
 es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años)
  o niño (menor a 13 años).*/
  //Dominguez Estefania  


/*var edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);


	if(edad > 17)
	{

     alert("es mayor de edad");

	}
	else //else-if-else y asi podria hacerlo cuantas veces precise el code
	{
		if(edad < 18 && edad > 12)
		{
         
         alert("es adolescente");

		}
		 else
		{

         alert("es niño");

		}


	}*/













//FIN DE LA FUNCIÓN
	/*if(edad >= 18)
	{

      alert("es mayor de edad");

	}

	if(edad >= 13 && edad <= 17)
	{

      alert("es adolescente");

	}

	if(edad <= 12)
	{

      alert("es niño");

	}*/