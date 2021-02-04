/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
//Domniguez Estefania


function Rectangulo () 
{
 
   var largo;
   var ancho;
   var perimetroTotal;
   var alambre;

   largo = txtIdLargo.value;
   ancho = txtIdAncho.value;

   largo = parseInt(largo);
   ancho = parseInt(ancho);

   perimetroTotal = largo * 2 + ancho * 2;

   alambre = perimetroTotal * 3;

   alert("la cantidad de alambre es: " + alambre);


}


function Circulo () 
{
	var perimetro;
	var radio;
	var alambre;
	const PI = 3.14; //siempre con el valor con punto, no coma

	radio = txtIdRadio.value;

	radio = parseInt(radio);

	perimetro = 2 * PI * radio;

	alambre = perimetro * 3;

	alert("la cantidad de alambre es: " + alambre);

}

function Materiales () 
{
	
   var largo;
   var ancho;
   var area;  //base x altura o largo x ancho
   var cemento;
   var cal;
   
   largo = txtIdLargo.value;
   ancho = txtIdAncho.value;

   largo = parseInt(largo);
   ancho = parseInt(ancho);

   area = largo * ancho;

   cemento = area * 3;
   cal = area * 2;

   alert("para un contrapiso de: " + area + " necesito: " + cemento + " bolsas de cemento " + " y " + cal + " bolsas de cal");

}

//const es para solo lectura, es para usar para 
//algo que tiene que mantener su valor constante
// siempre se escribe en mayuscula
