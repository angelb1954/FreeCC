
Tenga cuidado al reinicializar variables dentro de un bucle

A veces es necesario guardar información, incrementar contadores o restablecer variables dentro de un bucle. Un problema potencial es cuando las variables deben reiniciarse y no lo hacen, o viceversa. Esto es particularmente peligroso si reinicia accidentalmente la variable que se está utilizando para la condición del terminal, lo que provoca un bucle infinito.

La impresión de valores de variables con cada ciclo de su bucle console.log()puede descubrir comportamientos defectuosos relacionados con el restablecimiento o la falla al restablecer una variable.

Se supone que la siguiente función crea una matriz bidimensional con mfilas y ncolumnas de ceros. Desafortunadamente, no produce el resultado esperado porque la rowvariable no se reinicializa (se restablece en una matriz vacía) en el ciclo externo. Corrija el código para que devuelva una matriz correcta de ceros de 3x2, que se parece a [[0, 0], [0, 0], [0, 0]].













function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray
let row = [];
    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
