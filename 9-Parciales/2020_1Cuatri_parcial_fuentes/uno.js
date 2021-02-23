//Ejercicio 1
/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/
//Dominguez Estefania



//declaracion de variables
/*pedir productos(while) junto con, precio, marca 
cant y fabricante. validar segun la consigna*/

/*punto a:tengo que reconocer si el producto es alcohol, 
y recordar el precio, la cantidad y el fabricante del de menor precio
punto b: reconocer el tipo de producto con MAS UNIDADES y calcular
el promedio por compra (acumular las cant de cada tipo(alchool, barbijo;
jabon))= contador acumulador de productos
puntoc: unidades de jabon total(tengo que acumular la cant de jabones)

informar al usuario:*/




function mostrar()
{
	var contadorDeProductos = 0;
	var tipoProductos;
	var cantidad;
	var marca;
	var fabricante;
	var acumuladorCantidad;
	var acumuladorBarbijo;
	var acumuladorJabon;
	var acumuladorAlcohol;
	var contadorAlcohol =0;
	var contadorJabon = 0;
	var contadorBarbijo = 0;
	var precioUnitario;
	var suma;
	var promedio;

	while(contadorDeProductos < 5)
	{
		productos = prompt("ingrese su producto: barbijo, alcohol o jabon");
		contadorDeProductos = contadorDeProductos + 1;
	}




	alert("uno");
}
