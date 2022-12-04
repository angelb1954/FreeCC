
Elimina valores falsos

Elimina todos los valores falsos de una matriz. Devuelve una nueva matriz; no cambie la matriz original.

Los valores falsos en JavaScript son false, null, 0, "", undefinedy NaN.

Sugerencia: Intente convertir cada valor a un valor booleano.









function bouncer(arr) {
  
  
  return arr.filter(em=>Boolean(em))

  }
  
  
bouncer([7, "ate", "", false, 9]);