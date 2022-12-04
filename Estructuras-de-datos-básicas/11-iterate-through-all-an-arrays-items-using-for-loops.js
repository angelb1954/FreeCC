Iterar a través de todos los elementos de una matriz usando bucles for

A veces, cuando se trabaja con matrices, es muy útil poder iterar a través de cada elemento para encontrar uno o más elementos que podamos necesitar, o manipular una matriz en función de qué elementos de datos cumplan con un determinado conjunto de criterios. JavaScript ofrece varios métodos integrados, cada uno de los cuales itera sobre las matrices de maneras ligeramente diferentes para lograr diferentes resultados (como every(), forEach(), , etc.), sin embargo, la técnica que es más flexible y nos ofrece la mayor cantidad de control es un bucle map()simple .for

Considera lo siguiente:

function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
Usando un forbucle, esta función itera y accede a cada elemento de la matriz, y lo somete a una prueba simple que hemos creado. De esta forma, hemos determinado fácil y programáticamente qué elementos de datos son mayores que 10, y hemos devuelto una nueva matriz [12, 14, 80], que contiene esos elementos.

Hemos definido una función, filteredArray, que toma arr, una matriz anidada y elemcomo argumentos, y devuelve una nueva matriz. elemrepresenta un elemento que puede o no estar presente en una o más de las matrices anidadas dentro de arr. Modifique la función, utilizando un bucle, para devolver una versión filtrada de la matriz pasada de modo que se elimine forcualquier matriz anidada dentro de la arrque contiene .elem










function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
 for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1){
    
  newArr.push(arr[i]);}
  
 }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));