/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
//Dominguez Estefania

function mostrar()
{

 //reservo espacio en memoria para guardar el nombre del usuario
	let nombre;

 //guardo en la variable nombre el texto que escribio el usuario dentro de la ventana prompt
	nombre = prompt("ingrese su nombre");


 //copio el nombre que tengo guardado en la var nombre, dentro de la caja de texto embebida en la pag html
	document.getElementById("txtIdNombre").value = nombre
}



// el ejercicio es con id a la inversa es decir id = la variable
//por lo general todo programa o sist se rige por entradas (prompt,ide.value,document.getelementById) 
//procesos(transformaciones en las entradas) salidas (alert, console.log, document.write, id.value)