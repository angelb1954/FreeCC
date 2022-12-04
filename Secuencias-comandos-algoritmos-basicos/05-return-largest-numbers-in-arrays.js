Devolver los números más grandes en matrices

Devuelve una matriz que consiste en el número más grande de cada subarreglo proporcionado. Para simplificar, la matriz proporcionada contendrá exactamente 4 sub-matrices.

Recuerde, puede iterar a través de una matriz con un bucle for simple y acceder a cada miembro con sintaxis de matriz arr[i].









function largestOfFour(arr) {
  let result=[];
for(let i=0;i<arr.length;i++){
  result.push(Math.max(...arr[i]))
}
  
  return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);