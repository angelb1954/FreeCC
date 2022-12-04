
Título Caso una Oración

Devuelve la cadena proporcionada con la primera letra de cada palabra en mayúscula. Asegúrate de que el resto de la palabra esté en minúsculas.

A los efectos de este ejercicio, también debe escribir en mayúsculas las palabras de conexión como they of.




function titleCase(str) {
 return str.toLowerCase()
            .trim()
            .split(' ')
            .map( v => v[0].toUpperCase() + v.substring(1) )
            .join(' ');  
}

titleCase("I'm a little tea pot");