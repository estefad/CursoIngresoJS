/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

//Estefania Dominguez

function mostrarAumento()
{
	var importe;
	var resultado;
	var descuento; //los descuentos se restan
	
	importe = txtIdImporte.value;
	importe = parseInt(importe);

	descuento = importe * 0.25;
	//descuento = importe * 25 / 100;

	resultado = importe - descuento;
	//resultado = importe - (importe * 0.25);
	//resultado = importe * 0.75; aca se podria dar el
	// importe final ya que al 100% le reste el 25% del importe
	

	txtIdResultado.value = resultado;
}
