Cortar y empalmar

Se le dan dos matrices y un índice.

Copie cada elemento de la primera matriz en la segunda matriz, en orden.

Comience a insertar elementos en el índice nde la segunda matriz.

Devuelve la matriz resultante. Las matrices de entrada deben permanecer iguales después de que se ejecute la función.






function frankenSplice(arr1, arr2, n) {
 let arr3 = arr2.slice();
 for(let i=0 ;i<arr1.length;i++){
  arr3.splice(n,0,arr1[i]);
  n++
 }
return arr3
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);