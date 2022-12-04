mono fornido

Escriba una función que divida una matriz (primer argumento) en grupos de la longitud de size(segundo argumento) y los devuelva como una matriz bidimensional.






function chunkArrayInGroups(arr, size) {
 const newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}
// Código Explicación
// Primero, creamos una matriz vacía newArrdonde almacenaremos nuestros 'trozos'.
// El ciclo for comienza en cero, se incrementa sizecada vez que pasa por el ciclo y se detiene cuando llega a arr.length.
// Tenga en cuenta que estamos usando el ciclo para generar números que podemos usar como índices para dividir la matriz en las ubicaciones correctas.
// Dentro de nuestro ciclo, creamos cada fragmento usando arr.slice(i, i+size). El slicemétodo acepta dos argumentos, siendo el primer argumento el índice de donde debe comenzar el segmento y el segundo argumento donde debe terminar el segmento, pero no incluye el índice final.
// Agregamos este trozo/rebanada newArrcon newArr.push().
// Finalmente, devolvemos el valor de newArruna vez que se completa el ciclo for.

chunkArrayInGroups(["a", "b", "c", "d"], 2);