function mostrar() 
/*
Este fin de semana se festeja el día del niño y se deben gestionar las ventas de una jugueteria
Obviamente se registran las ventas producidas ese día. De cada venta se registra:
-tipo de juguete ("muñeca", “rompecabezas”, “pelota”)
-origen ("nacional", "importado")
-precio ( entre 1000 y 5000 pesos)
Informar:
a- El tipo de juguete mas vendido
b- El promedio de precio de los juguetes importados
c- La recaudacion total
d- Cual es el precio del rompecabezas nacional mas barato
e- Cuanto se percibio de iva en total (es el 21% de las ventas)
*/
{
let tipo;
let respuesta = "s";
let origen;
let precio;
let contMuñeca = 0;
let contPelota = 0;
let contRompecabezas = 0;
let flagMasBarato = 1;
let precioRompeMasBarato;
let precioflagMasBarato;
let contImportados = 0;
let acumPrecioImp =0;
let precioImp;
let precioTotal = 0;
let iva;



do{
tipo = prompt("Ingrese tipo de juguete (muñeca/rompecabezas/pelota)").toLowerCase();
  while (tipo != "muñeca" && tipo != "rompecabezas" && tipo != "pelota" ) {
    tipo = prompt("Invalido. Ingrese juguete correcto: ");
  }
origen =  prompt("Ingrese origen del jugete (importado /nacional)").toLowerCase();
while (origen != "importado" && origen != "nacional" ) {
  
  origen = prompt("Invalido. Ingrese origen correcto: ").toLowerCase();
}


  precio = parseInt(prompt("Ingrese el precio del jugete entre 1000 y 5000: "));
  while(precio < 1000 || precio > 5000 || isNaN(precio))
  {
    precio = parseInt(prompt("Invalid. Ingrese el valor en el rango correspondiente: "));
  }
  
  precioTotal = precioTotal + precio;


  switch (tipo) {
    case "muñeca":
      contMuñeca++;
      break;
    case "pelota":
      contPelota++;
      break;
    case "rompecabezas":
      contRompecabezas++;
      break;
  }

 if (contMuñeca > contRompecabezas && contMuñeca > contPelota) {
  jugueteMasVendido = "muñeca";
}
else if (contRompecabezas >= contMuñeca && contRompecabezas > contPelota) {
  jugueteMasVendido = "rompecabezas";
}
else {
  jugueteMasVendido = "pelotas";
}


if (origen == "importado"){
  contImportados++;
  acumPrecioImp= acumPrecioImp + precio;
}

if (tipo == "rompecabezas" && origen == "nacional") {

if (flagMasBarato || precio < precioRompeMasBarato){
  
  precioflagMasBarato = precio;
  
  flagMasBarato = 0;}}

   respuesta = prompt("¿Desea seguir ingresando juguetes? s/n").toLowerCase();
  while (respuesta != 's' && respuesta != 'n') {
    respuesta = prompt("Invalido. Ingrese s o n").toLowerCase();
    }

   } while (respuesta == "s");

 
  precioImp = acumPrecioImp / contImportados;

  
  iva = precioTotal * 0.21;

  document.write("a) El tipo de juguete mas vendido" +  jugueteMasVendido + "<br>");
  document.write("b) El promedio de precio de los juguetes importados" +  precioImp +"<br>");
  document.write( "c) La recaudacion total : " + precioTotal  + "<br>");
  document.write( "d) Cual es el precio del rompecabezas nacional mas barato : " + precioflagMasBarato  + "<br>");
  document.write( "e ) Cuanto se percibio de iva en total (es el 21% de las ventas): " + iva  + "<br>");


  }

