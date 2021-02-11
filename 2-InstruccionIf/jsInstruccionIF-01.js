function mostrar()
{
	
  var edad;

  edad = txtIdEdad.value;
  edad = parseInt(edad); /*tambien se entra sin el
                         parseInt y con el 15 como
                          string */

  if(edad == 15){

  	alert("niña bonita");
  }
  //el operador == me devuelve el true o false que declare en el if

	alert("fin de la funcion");

}//FIN DE LA FUNCIÓN

/*escribir una condicion que en el momento de ser evaluada, pueda dar 
el valor de true o false. eso depende del valor que el usuario
ingrese
*/