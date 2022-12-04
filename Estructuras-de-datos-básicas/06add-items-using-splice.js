
Agregar elementos usando empalme ()

¿Recuerdas en el último desafío que mencionamos que splice()puede tomar hasta tres parámetros? Bueno, puede usar el tercer parámetro, compuesto por uno o más elementos, para agregarlo a la matriz. Esto puede ser increíblemente útil para cambiar rápidamente un elemento, o un conjunto de elementos, por otro.

const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);
La segunda aparición de 12se elimina y agregamos 13y 14en el mismo índice. La numbersmatriz ahora sería [ 10, 11, 12, 13, 14, 15 ].

Aquí, comenzamos con una matriz de números. Luego, le pasamos lo siguiente a splice(): El índice en el que comenzar a eliminar elementos (3), el número de elementos a eliminar (1) y los argumentos restantes (13, 14) se insertarán a partir de ese mismo índice. Tenga en cuenta que puede haber cualquier número de elementos (separados por comas) después amountToDeletede , cada uno de los cuales se inserta.

Hemos definido una función, htmlColorNamesque toma una matriz de colores HTML como argumento. Modifique la función usando splice()para eliminar los dos primeros elementos de la matriz y agregue 'DarkSalmon'y 'BlanchedAlmond'en sus respectivos lugares.




function htmlColorNames(arr) {
  // Only change code below this line
arr.splice(0,2,"DarkSalmon",'BlanchedAlmond')
  // Only change code above this line
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));