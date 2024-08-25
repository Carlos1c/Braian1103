/*Se tienen N sobres con dinero, cada uno con billetes del mismo valor. De cada sobre se 
conoce el valor del billete y la cantidad. Se requiere determinar el total de dinero: a. en cada 
sobre, b. entre todos los sobres. 
El cliente entrega el siguiente formato para la presentación de la salida:*/

import sobres from "./Cl_sobre.js";
import dinero from "./Cl_dinero.js";

let sob = new sobres(5,10);
let sob2 = new sobres(2,20);
let sob3 = new sobres(4,100);
let sob4 = new sobres(3,50);

let din = new dinero();

din.procesarsobres(sob);
din.procesarsobres(sob2);
din.procesarsobres(sob3);
din.procesarsobres(sob4);

let salida = document.getElementById("salida");

salida.innerHTML=`
El sobre Nº1 tiene: ${din.totales()} <br>
El sobre Nº2 tiene: ${din.totales()} <br>
El sobre Nº3 tiene: ${din.totales()} <br>
El sobre Nº4 tiene: ${din.totales()} <br>

El total entre todos los sobres es de: ${din.sobres()}
`