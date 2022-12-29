// Buscadores Guardianes

// Cree una función que mire a través de una matriz arry devuelva el primer elemento que pase una 'prueba de verdad'. Esto significa que dado un elemento x, la 'prueba de verdad' se pasa si func(x)es true. Si ningún elemento pasa la prueba, devuelve undefined.






function findElement(arr, func) {
  for (let x of arr)
    if (func(x)) {
      return x;
    }



  
}

findElement([1, 2, 3, 4], num => num % 2 === 0);