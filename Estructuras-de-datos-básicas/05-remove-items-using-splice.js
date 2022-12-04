
Eliminar elementos usando empalme ()

Bien, hemos aprendido cómo eliminar elementos del principio y el final de los arreglos usando shift()y pop(), pero ¿qué pasa si queremos eliminar un elemento de algún punto intermedio? ¿O eliminar más de un elemento a la vez? Bueno, ahí es donde splice()entra en juego. splice()Nos permite hacer exactamente eso: eliminar cualquier número de elementos consecutivos de cualquier parte de una matriz.

splice()puede tomar hasta 3 parámetros, pero por ahora, nos centraremos solo en los primeros 2. Los dos primeros parámetros de splice()son números enteros que representan índices o posiciones de elementos en la matriz a la que splice()se está llamando. Y recuerde, los arreglos tienen un índice cero , por lo que para indicar el primer elemento de un arreglo, usaríamos 0. splice()El primer parámetro de representa el índice en la matriz desde la que comenzar a eliminar elementos, mientras que el segundo parámetro indica la cantidad de elementos que se eliminarán. Por ejemplo:

let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);
Aquí eliminamos 2 elementos, comenzando con el tercer elemento (en el índice 2). arraytendría el valor ['today', 'was', 'great'].

splice()no solo modifica la matriz a la que se llama, sino que también devuelve una nueva matriz que contiene el valor de los elementos eliminados:

let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);
newArraytiene el valor ['really', 'happy'].

Hemos inicializado una matriz arr. Úselo splice()para eliminar elementos de arr, de modo que solo contenga elementos que sumen el valor de 10.




const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(0,4);
arr.splice(1,1)
// Only change code above this line
console.log(arr);