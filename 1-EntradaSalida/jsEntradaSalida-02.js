/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre; //declarar una variable que se guarda en una porcion de memoria

	nombre = prompt("ingrese su nombre"); //asigne valor a variable es decir la inicializa
    
    alert("su nombre es:" + nombre); //genera ventana emergente, y prompt genera una ventana para introducir un dato
//el msje en alert sin comillas me devuelve el contenido de prompt, si escribo comillas, me devuelve lo escrito en alert
}