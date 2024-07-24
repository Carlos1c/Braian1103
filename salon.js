/*Sea un salón de clases en el DCyT, donde se procesan los datos de cada estudiante (nombre, 
    edad y sexo). El dato sexo es una letra F o M (femenino - masculino). Se desean procesar estos 
    registros de estudiantes para determinar: a. la edad promedio, b. el nombre del estudiante con 
    mayor edad, c. el porcentaje de chicas que son mayor de edad. 
    El profesor informa que si asisten Luis (16), Ana (19), José (20) y Carmen (18), la salida 
    requerida presenta el siguiente formato:*/

    import salon from "./Cl_salon.js";
    import estudiantes from "./Cl_estudiantes.js";

    let salo = new estudiantes ("luis",16,"M");
    let salo2 = new estudiantes ("ana",19,"F");
    let salo3 = new estudiantes ("jose",20,"M");
    let salo4 = new estudiantes ("carmen",18,"F");

    let estud = new salon();

    estud.procesarestudiantes(salo);
    estud.procesarestudiantes(salo2);
    estud.procesarestudiantes(salo3);
    estud.procesarestudiantes(salo4);

    let salida = document.getElementById("salida");

    salida.innerHTML=`
    Edad promedio: ${estud.promedio()}<br>
Estudiante con mayor edad: ${estud.mayoredad()}<br>
Porcentaje de chicas mayor de edad: ${estud.chicasmayor()}%
`
