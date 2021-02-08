/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

//Estefania Dominguez

/*function mostrarAumento()
{
	var importe;
	var resultado;
	var descuento; //los descuentos se restan
	
	importe = txtIdImporte.value;
	importe = parseInt(importe);

	descuento = importe * 0.25;
	//descuento = importe * 25 / 100;

	/* descuento=prompt("ingrese descuento")
	   descuento=parseInt(descuento)

	   descuento =importe*descuento/100
	   resultado =importe-descuento
	*/

	/*resultado = importe - descuento;
	//resultado = importe - (importe * 0.25); todo en la 
	//misma cuenta
	//resultado = importe * 0.75; aca se podria dar el
	// importe final ya que al 100% le reste el 25% del importe
	

	txtIdResultado.value = resultado;
} */


// Dominguez Estefania division 1h
/*2- en el ejercicio 10 de entrada y salida , se debe pedir
 el nombre del producto , el importe y tambien se debe pedir 
 el porcentaje de descuento al usuario, mostar el mensaje
  "usted compro un XXXXXX con XX % de descuento, el precio final es XXXX" */


function mostrarAumento()
{

  var producto;
  var importe;
  var descuento;
  var porcentaje;
  var resultado;

  importe = txtIdImporte.value;
  producto = prompt("ingrese el producto");
  porcentaje = prompt("ingrese su descuento");
  
  importe = parseFloat(importe);
  porcentaje = parseInt(porcentaje);

  descuento = importe * porcentaje / 100;
  resultado = importe - descuento;
  
  mensaje = "usted compro un " + producto + " con " + porcentaje;
  mensaje = mensaje + "% de descuento, el precio final es " + resultado; 

  txtIdResultado.value = mensaje;
}