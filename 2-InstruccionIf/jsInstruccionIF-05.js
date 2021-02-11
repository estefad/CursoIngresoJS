//Ejercicio 5
/*Al ingresar una edad solo debemos informar 
si la persona NO es adolescente.*/
//Dominguez Estefania


function mostrar()
{
	var edad;

    edad = txtIdEdad.value;
    edad = parseInt(edad);

    if(edad < 13 || edad > 17)
    {

      alert ("no es adolescente");
   	 
    }

}//FIN DE LA FUNCIÓN