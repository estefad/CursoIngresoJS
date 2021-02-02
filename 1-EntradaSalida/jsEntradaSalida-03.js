/*Pedir al usuario los siguientes datos:
nombreDelAlumno: por  id.value
edadDelAlumno: por prompt 
Mostrar por alert el mensaje "Ud  se llama ... y tiene ... años"*/
// Dominguez Estefania 1h


function mostrar()
{

var nombreDelAlumno;
var edadDelAlumno;

nombreDelAlumno = document.getElementById('txtIdNombre').value;
edadDelAlumno = prompt("ingrese su edad", "32");

alert("Ud se llama:"  + nombreDelAlumno +  "y tiene:"  + edadDelAlumno +  "años");

}
