//Ejercicio 6
/*Al ingresar una edad debemos informar si la persona
 es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años)
  o niño (menor a 13 años).*/
  //Dominguez Estefania


function mostrar()
{
	
	var edad;

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


	}


}//FIN DE LA FUNCIÓN
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