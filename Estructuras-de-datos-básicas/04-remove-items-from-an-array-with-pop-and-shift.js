Eliminar elementos de una matriz con pop() y shift()

Ambos push()y unshift()tienen métodos correspondientes que son casi opuestos funcionales: pop()y shift(). Como ya habrá adivinado, en lugar de agregar, pop() elimina un elemento del final de una matriz, mientras que shift()elimina un elemento del principio. La diferencia clave entre pop()y shift()y sus primos push()y unshift(), es que ninguno de los métodos toma parámetros, y cada uno solo permite que una matriz sea modificada por un solo elemento a la vez.

Vamos a ver:

let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();
greetingstendría el valor ['whats up?', 'hello'].

greetings.shift();
greetingstendría el valor ['hello'].

También podemos devolver el valor del elemento eliminado con cualquier método como este:

let popped = greetings.pop();
greetingstendría el valor [], y poppedtendría el valor hello.

Hemos definido una función, popShiftque toma una matriz como argumento y devuelve una nueva matriz. Modifique la función, usando pop()y shift(), para eliminar el primer y el último elemento de la matriz de argumentos, y asigne los elementos eliminados a sus variables correspondientes, de modo que la matriz devuelta contenga sus valores.






function popShift(arr) {
  let popped=arr.pop(); // Change this line
  let shifted= arr.shift(); // Change this line
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));