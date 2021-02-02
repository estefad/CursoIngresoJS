/*
Debemos lograr tomar nombre, apellido y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
//Estefania Dominguez

function mostrar()
{	

var nombre;
var edad;
var apellido;

nombre = txtIdNombre.value; //el .value es porque quiero algo de la caja de txt, en este caso un valor/nombre
edad = txtIdEdad.value;
apellido = prompt("ingrese su apellido");


 //concateno (+ o pego con el +) en el alert, para que en la ventana emergente se lea la cadena con los datos que completo el usuario
 // es la combinacion de literales de cadena y variables
	alert(" Usted se llama: " +  nombre + " y tiene: " + edad  + "años: " + " y su apellido es: " +  apellido);
}

// el apellido se me pide en el 5bis, por lo que tengo que ver como lo  muestro en el alert
//como el txtID.value lo saco de la html, no puedo hacer lo mismo con el apellido, por lo cual, me conviene usar el prompt
//para asi luego concatenar nombre, apellido y edad en el alert 
//template string es otra manera de llamar al alert
// alert(`usted se llama $(nombre) y tiene $(edad) años`);