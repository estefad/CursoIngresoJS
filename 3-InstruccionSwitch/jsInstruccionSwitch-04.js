//Ejercicio 4
/*al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.*/
//Dominguez Estefania


function mostrar()
{
	//tomo el mes
	var mes

	mes = txtIdMes.value;

	switch(mes)
	{
       case "Enero":
       case "Marzo":
       case "Mayo":
       case "Julio":
       case "Agosto":
       case "Octubre":
       case "Diciembre":
            alert(mes + " tiene 31 dias");
            break;


       case "Abril":
       case "Junio":
       case "Septiembre":
       case "Noviembre":
            alert(mes + " tiene 30 dias");
            break;


       case "Febrero":
            alert(mes + " tiene 28 dias");
            break;

	}

}