//Ejercicio 10
/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/
//Dominguez Estefania



function mostrar()
{

	var nota;
	
	nota = Math.round(Math.random()* 9 + 1);

	//if(nota == 9 || nota ==10 )
	if(nota >8)
	{
   
      alert("EXCELENTE " + nota);

	}
	else
	{

     if(nota > 3 && nota < 9)
     {
      
      alert("APROBÓ " + nota);
  
     }
     else
     {

      alert("Vamos, la proxima se puede " + nota)

     }

	}
	
}//FIN DE LA FUNCIÓN