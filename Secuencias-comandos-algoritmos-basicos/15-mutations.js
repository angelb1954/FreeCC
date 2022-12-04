Mutaciones

Retorna truesi la cadena en el primer elemento de la matriz contiene todas las letras de la cadena en el segundo elemento de la matriz.

Por ejemplo, ["hello", "Hello"]debería regresar trueporque todas las letras en la segunda cadena están presentes en el primer caso, ignorando.

Los argumentos ["hello", "hey"]deberían regresar falseporque la cadena hellono contiene un y.

Por último, ["Alien", "line"]debería volver trueporque todas las letras de lineestán presentes en Alien.








  function mutation(arr) {
  const test = arr[1].toLowerCase();
  const target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}
// Código Explicación
// Primero ponemos las dos cadenas en la matriz en minúsculas. test mantendrá lo que estamos buscando en target.
// Luego recorremos nuestros caracteres de prueba y, si alguno de ellos no se encuentra, lo hacemos return false.

// Si se encuentran todos , el ciclo terminará sin devolver nada y llegaremos a return true.

mutation(["hello", "hey"]);