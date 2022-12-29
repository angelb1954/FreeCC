// Factorizar un número

// Devuelve el factorial del entero proporcionado.

// Si el entero se representa con la letra n, un factorial es el producto de todos los enteros positivos menores o iguales a n.

// Los factoriales a menudo se representan con la notación abreviadan!

// Por ejemplo:5! = 1 * 2 * 3 * 4 * 5 = 120

// Solo se proporcionarán a la función números enteros mayores o iguales a cero.



function factorialize(num) {
  let result=1;
  for (let i = 1; i <= num; i++) {
     result*=i;
  }
return result;
};

factorialize(5);