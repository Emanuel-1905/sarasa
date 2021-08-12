function mostrar() 
/*
Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
nombre,
carrera("Quimica";"Fisica";"Sistemas"),
sexo (masculino - femenino -no binario),
cantidad de materias(entre 1 y 5),
Nota promedio del alumno(entre 0 y 10),
edad (validar).
Se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.
*/
{
let nombre;
let carrera;
let sexo;
let materia;
let nota;
let edad;
let contQuimica = 0;
let contFisica = 0;
let contSistemas =0;
let flagMejorProm = 1;
let flagAlumnaJoven = 1;
let flagMasMaterias = 1;
let nomMasJoven;
let notaMax;
let nomMejorProm;
let masMaterias;
let edadMaterias;
let nomMaterias;
let totalEst;
let porcFisica;
let porcQuimica;
let porcSistemas;


for (i=0; i<500; i++){ 


	nombre = prompt("Ingrese su nombre ").toLowerCase();

	edad = parseInt(prompt("Ingrese la edad"));
	while (isNaN(edad) || edad <= 0 ) {
		edad = parseInt(prompt("Edad invalida. Ingrese nuevamente: "));
	}

	sexo = prompt("Ingrese sexo (masculino/femenino/nobinario)").toLowerCase();
	while (sexo != "masculino" && sexo != "femenino" && sexo != "nobinario" ) {
		sexo = prompt("Invalido. Ingrese sexo correspondiente: ").toLowerCase();
  }

	carrera = prompt("Ingrese la carrera (quimica/fisica/sistemas)").toLowerCase();
	while (carrera != "quimica" && carrera != "fisica" && carrera != "sistemas" ) {
	carrera= prompt("Dato Invalido. Ingrese carrera correspondiente: ").toLowerCase();
}
		materia = parseInt(prompt("Ingrese la materia entre 1 y 5: "));
		while(materia < 1 || materia > 5|| isNaN(materia)){
			materia = parseInt(prompt("Invalido. Ingrese material dentro del rango solicitado: "));
		}
			
		nota = parseInt(prompt("Ingrese promedio de nota del alumno entre 0 y 10: "));
		while(nota < 0 || nota > 10 || isNaN(nota))
		{
			nota = parseInt(prompt("Invalido. Ingrese una nota entre 0 y 10: "));
		}

  switch (carrera){

      case"quimica":
      contQuimica++;
      break;

      case"fisica":
      contFisica++;
      break;


      case"sistemas":
      contSistemas++;
      break;
}

if (carrera== "fisica") {

if (flagMejorProm || nota > notaMax) { 
	nomMejorProm= nombre;
	
	notaMax = nota;
	flagMejorProm = 0;
}
  
 if (sexo == "femenino"){

  if (flagAlumnaJoven || edad < edadJoven ){ 
	
	nomMasJoven= nombre;
	edadJoven = edad;
	flagAlumnaJoven = 0;}
  }


  if(carrera == "fisica" || carrera == "sistemas") {
  
  if (flagMasMaterias || materia > masMaterias ) { 
	
	nomMaterias= nombre;
	edadMaterias = edad;
	flagMasMaterias = 0;}  }


}

    totalEst = contFisica + contQuimica + contSistemas;
    porcFisica = contFisica * 100 / totalEst;
    porcQuimica = contQuimica * 100 / totalEst;
    porcSistemas = contSistemas * 100 / totalEst;

    document.write("a)  El nombre del mejor promedio de los alumnos que estudian Fisica. Sin importar el sexo." +  nomMejorProm + "<br>");
   document.write("B)El nombre de la alumna mas joven. " + nomMasJoven +"<br>");
   document.write("c) Porcentaje de estudiantes que estudia cada carrera es: " + porcSistemas+ "y el porcentaje de quimica es " + porcQuimica + "y el porcentaje de Fisica es: " + porcFisica + "<br>");
   document.write( "D ) nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica. : " + nomMaterias  + " edad  : " + edadMaterias + "<br>");



}


 
}
