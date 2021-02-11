//Ejercicio 7
/*Al ingresar una edad menor a 18 años y un estado civil distinto
 a "Soltero",mostrar el siguiente mensaje: 
 'Es muy pequeño para NO ser soltero.'*/
//Dominguez Estefania


function mostrar()
{
	var edad;
	var estado;
	
	edad = txtIdEdad.value;
	estado = document.getElementById("estadoCivil").value;
    edad = parseInt(edad);


	if(edad < 19 && estado != "Soltero" ) //Soltero mayusc porque es case sensitive
	{

		alert("es muy pequeño para NO ser soltero");
	}
	

}//FIN DE LA FUNCIÓN