/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
//Dominguez Estefania

//function mostrar()
{

 //reservo espacio en memoria para guardar el nombre del usuario
	//let nombre;

 //guardo en la variable nombre el texto que escribio el usuario dentro de la ventana prompt
	//nombre = prompt("ingrese su nombre");


 //copio el nombre que tengo guardado en la var nombre, dentro de la caja de texto embebida en la pag html
	//document.getElementById("txtIdNombre").value = nombre
}

//Dominguez Estefania division 1h

/* Ingresar descripción (por prompt) y precio de un producto (por id).
El programa deberá mostrar por alert la descripción del producto junto al precio aumentado en un 30%. 
Pueden utilizar el html del ejercicio 4 para resolverlo.*/

function mostrar()
{

  var producto;
  var precio;
  var aumento;
  var resultado;

  producto = prompt("ingrese nombre del producto");
  precio = prompt("ingrese precio");
  //precio era en txt.

  precio = parseInt(precio);
  

  aumento = precio * 30 / 100;

  resultado = precio + aumento;


  txtIdNombre.value = "el valor de "  + producto + " sin aumento es " + precio;

  alert("el valor de: " + producto + " con el 30% de aumento " + " es " + resultado);

}
//aca se podia en la html del ejercicio sacar el readonly en la caja
//de texto, para ingresar el precio por id







 /*el ejercicio es con id a la inversa es decir id = la variable
por lo general todo programa o sist se rige por entradas (prompt,ide.value,document.getelementById) 
procesos(transformaciones en las entradas) salidas (alert, console.log, document.write, id.value)

salida de datos:
alert
document.getElementById("txtIdNombre").value= nombre

Ingrese datos
prompt;
nombre = document.getElementById("txtIdNombre").value= nombre

*/