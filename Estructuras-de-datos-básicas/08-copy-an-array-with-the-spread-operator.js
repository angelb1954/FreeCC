Copie una matriz con el operador de propagación

Si bien slice()nos permite ser selectivos sobre qué elementos de una matriz copiar, entre varias otras tareas útiles, el nuevo operador de extensión de ES6 nos permite copiar fácilmente todos los elementos de una matriz, en orden, con una sintaxis simple y fácil de leer. La sintaxis extendida simplemente se ve así:...

En la práctica, podemos usar el operador de propagación para copiar una matriz de esta manera:

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
thatArray[true, true, undefined, false, null] es igual thisArray permanece sin cambios y thatArraycontiene los mismos elementos que thisArray.

Hemos definido una función copyMachineque toma arr(una matriz) y num(un número) como argumentos. Se supone que la función devuelve una nueva matriz formada por numcopias de arr. Hemos hecho la mayor parte del trabajo por usted, pero aún no funciona del todo bien. Modifique la función usando la sintaxis extendida para que funcione correctamente (pista: ¡otro método que ya hemos cubierto podría ser útil aquí!).







function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
newArr.push([...arr]);
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));