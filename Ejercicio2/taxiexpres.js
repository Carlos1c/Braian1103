/*La empresa TAXI EXPRESS C.A, dedicada al ramo de servicios de transporte, señala que, por 
el aumento de su cartera de clientes, necesita un sistema automatizado que le permita llevar 
ciertas estadísticas. Para ello por cada cliente que atiende le toma los siguientes datos: nombre, 
tipo de servicio a tomar (1. Largo Urbano, 2. Corto Urbano), edad y sexo (1. Masculino o 2. 
Femenino). Es significativo para la empresa, obtener un reporte que contenga: a) Cantidad de 
clientes femeninas mayores de edad, b) cuál ha sido la menor edad atendida, c) promedio de 
edad de los clientes. 
Al ser consultada por la forma como desean que se presente la salida, la empresa suministra 
el siguiente formato, informando que Juan (20 años) tomó servicio corto, Ana (19) largo, Lin 
(18) corto, y Mary (15) largo: */

import clientes from "./Cl_clientes.js";
import servisio from "./Cl_servisio.js";

let clien = new clientes ("juan",20,"M","corto");
let clien1 = new clientes ("ana",19,"F","largo");
let clien2 = new clientes ("lin",18,"F","corto");
let clien3 = new clientes ("Mary",15,"F","largo");

let serv = new servisio();

serv.procesarclientes(clien);
serv.procesarclientes(clien1);
serv.procesarclientes(clien2);
serv.procesarclientes(clien3);

let salida = document.getElementById("salida");

salida.innerHTML=`
Cantidad de clientes femeninas mayores de edad: ${serv.canticlientes()}<br>
La menor edad atendida fue de ${serv.menoredades()} años <br>
El promedio de edad de los clientes es de ${serv.promedioedad()} años 
`