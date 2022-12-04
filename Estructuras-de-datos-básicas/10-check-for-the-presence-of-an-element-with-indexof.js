Comprobar la presencia de un elemento con indexOf()

Dado que las matrices se pueden cambiar o mutar en cualquier momento, no hay garantía sobre dónde estará una parte de los datos en particular en una matriz determinada, o si ese elemento aún existe. Afortunadamente, JavaScript nos brinda otro método incorporado indexOf(), que nos permite verificar rápida y fácilmente la presencia de un elemento en una matriz. indexOf()toma un elemento como parámetro y, cuando se llama, devuelve la posición o el índice de ese elemento, o -1si el elemento no existe en la matriz.

Por ejemplo:

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates');
fruits.indexOf('oranges');
fruits.indexOf('pears');
indexOf('dates')devuelve -1, indexOf('oranges')devuelve 2y indexOf('pears')devuelve 1(el primer índice en el que existe cada elemento).

indexOf()puede ser increíblemente útil para verificar rápidamente la presencia de un elemento en una matriz. Hemos definido una función, quickCheck, que toma una matriz y un elemento como argumentos. Modifique la función usando indexOf()para que devuelva truesi el elemento pasado existe en la matriz y falsesi no.









function quickCheck(arr, elem) {
  // Only change code below this line
  let prueba=arr.indexOf(elem);
 if(prueba===-1){
    return false}
  
  return true;
  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));