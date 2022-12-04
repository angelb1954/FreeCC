Copiar elementos de matriz usando slice()

El siguiente método que cubriremos es slice(). En lugar de modificar una matriz, slice()copia o extrae una cantidad dada de elementos a una nueva matriz, dejando intacta la matriz a la que se llama. slice()toma solo 2 parámetros: el primero es el índice en el que comienza la extracción y el segundo es el índice en el que se detiene la extracción (la extracción ocurrirá hasta el elemento en este índice, pero sin incluirlo). Considera esto:

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);
todaysWeathertendría el valor ['snow', 'sleet'], mientras weatherConditionsque todavía tendría ['rain', 'snow', 'sleet', 'hail', 'clear'].

En efecto, hemos creado una nueva matriz extrayendo elementos de una matriz existente.

Hemos definido una función, forecast, que toma una matriz como argumento. Modifique la función usando slice()para extraer información de la matriz de argumentos y devolver una nueva matriz que contenga los elementos de cadena warmy sunny.





function forecast(arr) {
  // Only change code below this line
let arr2=arr.slice(2,4); 
  return arr2;
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));