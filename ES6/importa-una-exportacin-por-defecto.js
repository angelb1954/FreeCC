La sintaxis difiere en un punto clave. El valor importado, add, no está rodeado por llaves ({}). add, aquí es simplemente un nombre de variable, para cualquiera que sea la exportación por defecto del archivo math_functions.js. Puedes utilizar cualquier nombre aquí, al importar un valor por defecto.

El siguiente código, importa como exportación por defecto, desde el archivo math_functions.js, encontrado en el mismo directorio que este archivo. Da a la importación el nombre de subtract.




import subtract from "./math_functions.js";
// Cambia solo el código encima de esta línea

subtract(7,4);