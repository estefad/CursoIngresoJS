//Ejercicio 2
/*al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno */
// Domiguez Estefania



function mostrar()
{
	var mes; /*ñ en variable no se utiliza, por compatibilidad,
	                aunque el code ascii extendido lo admite*/
    mes = txtIdMes.value;

   
                   //CASO DOS, LOS MESES AGRUPADOS SEGUN INDICACION
    switch(mes)
    {
      case "Enero":
      case "Febrero":
      case "Septiembre":
      case "Octubre":
      case "Noviembre":
      case "Diciembre":
            alert("Ya pasamos el frio ahora calor!!!");
            break;


      case "Marzo":
      case "Abril":
      case "Mayo":
      case "Junio":
            alert("Falta para el Invierno");
            break;


      case "Julio":
      case "Agosto":
            /*edad = prompt("su edad es");
            edad = parseInt(edad);
            if(edad < 15){}*/
            alert("Abrigate que hace frio");
            break;         
 

    }



}//FIN DE LA FUNCIÓN


/* switch(mes)
    {
      case "Enero":
            alert("Ya pasamos el frio ahora calor!!!");
            break;

      case "Febrero":
            alert("Ya pasamos el frio ahora calor!!!");
            break;

      case "Marzo":
            alert("Falta para el Invierno");
            break;

      case "Abril":
            alert("Falta para el Invierno");  

      case "Mayo":
            alert("Falta para el Invierno");
            break;

      case "Junio":
            alert("Falta para el Invierno");
            break;

      case "Julio":
            alert("Abrigate que hace frio");
            break;

      case "Agosto":
            alert("Abrigate que hace frio");
            break;     

      case "Septiembre":
            alert("Ya pasamos el frio ahora calor!!!");
            break;

      case "Octubre":
            alert("Ya pasamos el frio ahora calor!!!");
            break;

      case "Noviembre":
            alert("Ya pasamos el frio ahora calor!!!");
            break;

      case "Diciembre":
            alert("Ya pasamos el frio ahora calor!!!");      
 

    } CASO UNO, UN CASE POR MES*/