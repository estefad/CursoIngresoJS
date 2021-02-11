//Ejercicio 8
/* Al ingresar una edad menor a 18 años y un estado
 civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, 
mostrar el siguiente mensaje: 'Es soltero y no es menor.'*/
//Dominguez Estefania 



function mostrar()
{
   var edad;
   var estado;

   edad = txtIdEdad.value;
   estado = document.getElementById("estadoCivil").value;
   edad = parseInt(edad);

   if(edad > 17 && estado == "Soltero")
   {
   
     alert("Es Soltero y no es menor");

   }
   else
   {

   	  alert("fin de la funcion");

   }
	


}//FIN DE LA FUNCIÓN