/*Ejercicio 4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */
//Dominguez Estefania



function CalcularPrecio () 
{
 	var cantidadLamparas;
 	var marca;
 	var precioUnitario = 35;
 	var descuento;
 	var precioParcial;
 	var precioConDescuento;
 	var IIBB;
 	var impuestoAgregado = 10;
 	var precioConIIBB;

 	cantidadLamparas = txtIdCantidad.value;
 	marca = document.getElementById("Marca").value;

 	cantidadLamparas = parseInt(cantidadLamparas);
 	descuento = parseInt(descuento);
 	IIBB = parseInt(IIBB);
 	impuestoAgregado = parseInt(impuestoAgregado)

    if(cantidadLamparas > 5)
 	{
 		descuento = 50;
		mensaje = "la oferta, con un 50% de descuento es: ";
 	}
    else
    {
     if(cantidadLamparas == 5 ) //marca == "ArgentinaLuz"
 	 {
 	 	if (marca == "ArgentinaLuz")
 	 	{
 	 		descuento = 40;
			mensaje = "la oferta, con un 40% de descuento es: ";
 	 	}
 	 	else
 	 	{
 	 		descuento = 30;
			mensaje = "la oferta, con un 30% de descuento es: ";	
 	 	}  	 			    		
 	 }
 	 else
 	 {
 	 	if(cantidadLamparas == 4)
 	 	{
 	 		if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
 	 		{
 	 			descuento = 25;
 	 			mensaje = "la oferta, con un 25% de descuento es: ";
 	 		}
 	 		else
 	 		{
 	 			descuento = 20;
 	 			mensaje = "la oferta, con un 20% de descuento es: ";
 	 		}
 	 	}
 	 	else
 	 	{
 	 		if(cantidadLamparas == 3)
 	 		{
 	 			if(marca == "ArgentinaLuz")
 	 			{
 	 				descuento = 15;
 	 				mensaje = "la oferta, con un 15% de descuento es: ";
 	 			}
 	 			else
 	 			{
 	 				if(marca == "FelipeLamparas")
 	 				{
 	 					descuento = 10;
 	 					mensaje = "la oferta, con un 10% de descuento es: ";
 	 				}
 	 				else
 	 				{
 	 					descuento = 5;
 	 					mensaje = "la oferta, con un 5% de descuento es: ";
 	 				}
 	 			}
 	 		}
 	 		
 	 	}
 	 }

 	}
 	if(precioConDescuento > 119)
 	{
 	 	impuestoAgregado = 10;
 	}


    precioParcial = precioUnitario * descuento / 100;
    precioConDescuento = (precioUnitario - precioParcial) + (cantidadLamparas * precioUnitario);
    mensaje = mensaje + precioConDescuento

    IIBB = precioConDescuento * impuestoAgregado / 100;
 	precioConIIBB = precioConDescuento + IIBB;
 	

    txtIdprecioDescuento.value = mensaje;
    alert("Usted pago 10% de IIBB, siendo " + precioConIIBB + " el impuesto que se pagó");
}









/*if(cantidadLamparas > 5)
 	{
 		descuento = precio * 50 / 100;
 		precioConDescuento = precio - descuento;

 		mensaje = "la oferta, con un 50% de descuento es: " + precioConDescuento;
 		txtIdprecioDescuento.value = mensaje;
 	}
    else
    {
     if(cantidadLamparas == 5 && marca == "ArgentinaLuz")
 	 {
 		descuento = precio * 40 / 100;
 		precioConDescuento = precio - descuento;

 		mensaje = "la oferta, con un 40% de descuento es: " + precioConDescuento;
 		txtIdprecioDescuento.value = mensaje;
 	 }
 	 else
 	 {
 	 	if(cantidadLamparas == 5)
 	 	{
 	 	   descuento = precio * 30 / 100;
 		   precioConDescuento = precio - descuento;

 		   mensaje = "la oferta, con un 30% de descuento es: " + precioConDescuento;
 		   txtIdprecioDescuento.value = mensaje;
 	    }
 	    else
 	    {
 	    	if(cantidadLamparas == 4 && marca == "ArgentinaLuz" || marca == "FelipeLamparas")
 	    	{
 	    		descuento = precio * 25 / 100;
 	    		precioConDescuento = precio - descuento;

 	    		mensaje = "la oferta, con un 25% de descuento es: " + precioConDescuento;
 		        txtIdprecioDescuento.value = mensaje;
 	    	}
 	    	else
 	    	{
 	    		descuento = precio * 20 / 100;
 	    		precioConDescuento = precio - descuento;

 	    		mensaje = "la oferta, con un 20% de descuento es: " + precioConDescuento;
 		        txtIdprecioDescuento.value = mensaje;
 	    	}
 	    }
 	 }

    }*/
