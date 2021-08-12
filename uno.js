function mostrar()
/*
Se necesita llevar la gestión de una veterinaria. Para ello se podrán registrar los datos de cada mascota mientras el usuario quiera.
De cada mascota se solicita:
-nombre (entre 3 y 8 caracteres)
-tipo (“mamifero”, “ave”, “reptil”)
-sangre ( "fria", "calida")
Si es de tipo reptil solo puede tener sangre fria
-edad ( mayor a cero)
-sexo( “m” de macho o “h” de hembra )
Informar:
a- Promedio de edad de los reptiles
b- tipo y sexo de la mascota mas joven
c- Del total de mascotas que porcentaje son aves
d- De que tipo de mascota hay mas cantidad
*/ {
  let nombre;
  let tipo;
  let sangre;
  let edad;
  let sexo;
  let contAve = 0;
  let contMamifero = 0;
  let contReptil = 0;
  let contEdadReptil = 0;
  let flagMasJoven = 1;
  let edadJoven;
  let tipoJoven;
  let sexoJoven;
  let promReptil;
  let porcAves;
  let totalTipo;
  let cantMascota;



  do {
    nombre = prompt("Ingrese nombre de la mascota: ").toLowerCase();
    while (!(nombre.length >= 3 && nombre.length <= 8)) {
      nombre = prompt("Nombre invalido. Ingrese nombre entre 3 y 8 caracteres: ").toLowerCase();
    }

    edad = parseInt(prompt("Ingrese la edad de la mascota"));
    while (!(isNaN(edad) && edad <= 0)) {
      edad = parseInt(prompt("Edad invalida. Ingrese edad nuevamente: "));
    }


    tipo = prompt("Ingrese la tipo (mamifero/ave/reptil)").toLowerCase();
    while (tipo != "mamifero" && tipo != "ave" && tipo != "reptil") {
      tipo = prompt("Tipo de mascota invalido. Intente nuevamente: ").toLowerCase();
    }

    if (tipo == "reptil") {
      alert("El tipo de sangre del reptil es fria ");
      sangre = "fria";
    }
    else {
      sangre = prompt("Ingrese la sangre (fria/calida)").toLowerCase();
      while (sangre != "fria" && sangre != "calida") {
        sangre = prompt("Tipo de sangre invalida. Intente nuevamente ").toLowerCase();
      }
    }
    sexo = prompt("Ingrese sexo que corresponda (m/h)").toLowerCase();
    while (sexo != "m" && sexo != "h") {
      sexo = prompt("ERROR. Ingrese sexo m de macho y h de hembra ").toLowerCase();
    }


    if (tipo == "ave") {
      contAve++;
    }

    if (tipo == "mamifero") {
      contMamifero++;
    }
    if (tipo == "reptil") {
      contReptil++;
      contEdadReptil += edad;
    }


    if (flagMasJoven || edad < edadJoven) {
      tipoJoven = tipo;
      edadJoven = edad;
      sexoJoven = sexo;

      flagMasJoven = 0;
    }


    if (contAve > contMamifero && contAve > contReptil) {
      cantMascota = "ave";
    }
    else if (contMamifero > contAve && contMamifero > contReptil) {
      cantMascota = "mamifero";
    }
    else if (contReptil > contMamifero && contReptil > contAve) {
      cantMascota = "reptil";
    }


    respuesta = prompt("¿Desea seguir ingresando mascotas? s/n").toLowerCase();
    while (respuesta != "s" && respuesta != "n") {
      respuesta = prompt("Respuesta invalida. Conteste correctamente").toLowerCase();
    }

  } while (respuesta == "s");

  totalTipo = contReptil + contAve + contMamifero;
  promReptil = contEdadReptil / contReptil;

  porcAves = contAve * 100 / totalTipo;

  //RESPUESTAS:

  document.write("a) Promedio de edad de los reptiles" + promReptil + "<br>");

  document.write("b) Tipo de la mascota mas joven " + tipoJoven + " de sexo " + sexoJoven + "<br>");

  document.write("c) Del total de mascotas " + porcAves + "% son aves" + "<br>");

  document.write("D ) d- De que tipo de mascota hay mas cantidad : " + cantMascota + "<br>");
}