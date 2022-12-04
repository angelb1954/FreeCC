Dónde pertenezco

Devuelve el índice más bajo en el que se debe insertar un valor (segundo argumento) en una matriz (primer argumento) una vez que se ha ordenado. El valor devuelto debe ser un número.

Por ejemplo, getIndexToIns([1,2,3,4], 1.5)debería regresar 1porque es mayor que 1(índice 0), pero menor que 2(índice 1).

Del mismo modo, getIndexToIns([20,3,5], 19)debería regresar 2porque una vez que se haya ordenado la matriz, se verá como [3,5,20]y 19es menor que 20(índice 2) y mayor que 5(índice 1).




function getIndexToIns(arr, num) {
  arr.sort((a,b)=>a-b);
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) 
      return i;
    }
    return (arr.length);
  }


getIndexToIns([40, 60], 50);

Código Explicación
Primero ordeno la matriz usando .sort(callbackFunction)para ordenarla de menor a mayor, de izquierda a derecha.
Luego uso un bucle for para comparar los elementos de la matriz a partir del más pequeño. Cuando un elemento en la matriz es mayor que el número con el que estamos comparando, devolvemos el índice.


Otra solución:


function getIndexToIns(arr, num) {
  return arr.filter(val => num > val).length;
}
Código Explicación

Cuente el número de entradas que son más pequeñas que el nuevo valornum
El nuevo valor se insertaría después de estos valores.