/*Al ingresar una edad debemos informar si la persona es 
adolescente, edad entre 13 y 17 años (inclusive) .*/
//Dominguez Estefania


function mostrar()
{
	var edad;

    edad = txtIdEdad.value;
    edad = parseInt(edad);

   
    if(edad > 12 && edad < 18)
    {

   	 	alert ("es adolescente");
   	 
    }

    /*condicion simple
   if(edad >= 13){

     if (edad <=17) {

      alert ("es adolescente");
     }

    }

    //condicion multiple
    or= ||(doble pipe)  and= &&(doble ampersand)  
    not a= !a(operador not) */


    
}//FIN DE LA FUNCIÓN
/*tengo que preguntar en la funcion si la edad esta entre los 13 y 17
y para eso debo usar otro if dentro del mismo if, y esto lo hago cuantas
veces precise, solo tomo los limites del intervalo  */