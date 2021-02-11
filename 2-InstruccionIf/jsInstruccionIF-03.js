/*Al ingresar una edad debemos informar si la persona es mayor de edad,
 sino informar que es un menor de edad.*/
 //Dominguez Estefania


function mostrar()
{
	//tomo la edad 
    var edad;

    edad = txtIdEdad.value;
    edad = parseInt(edad);

   if(edad > 17)//(edad >= 18)
    {           
   	alert("es mayor de edad");

    }

   else
    {

    	alert("es menor de edad");
    } /*no necesito dar instruccion al else
    porque ya le di condicion en el if,
    osea true ejecuta if, false ejecuta else*/


}//FIN DE LA FUNCIÓN en if-else, siempre alguno se ejecuta

/*dejo if(edad > 17) porque hago que el procesador 
piense solo una operacion, en vez de dos, en el caso de 
if(edad >= 18)*/