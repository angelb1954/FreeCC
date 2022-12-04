Ya que export default es usado para declarar un valor fallback para un módulo o archivo, sólo puedes tener un valor que sea exportación por defecto en cada módulo o archivo. Además, no puedes usar export default con var, let, o const

La siguiente función debe ser el valor fallback para el módulo. Por favor, añade el código necesario para hacerlo.



function subtract(x, y) {
  return x - y;
}

export default function(x,y){returnx+y;}