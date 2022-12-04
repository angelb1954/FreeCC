// Iterar a través de las claves de un objeto con una instrucción for...in

// A veces, es posible que necesite iterar a través de todas las claves dentro de un objeto. Esto requiere una sintaxis específica en JavaScript llamada declaración for...in . Para nuestro usersobjeto, esto podría verse así:

// for (let user in users) {
//   console.log(user);
// }
// Esto registraría Alan, Jeffy Sarah- cada valor en su propia línea.

// En esta declaración, definimos una variable usery, como puede ver, esta variable se restableció durante cada iteración a cada una de las claves del objeto a medida que la declaración recorría el objeto, lo que resultó en que el nombre de cada usuario se imprimiera en la consola.

// NOTA: Los objetos no mantienen un orden en las claves almacenadas como lo hacen las matrices; por lo tanto, la posición de una clave en un objeto, o el orden relativo en el que aparece, es irrelevante al hacer referencia o acceder a esa clave.

// Hemos definido una función countOnlineque acepta un argumento (un objeto de usuarios). Utilice una instrucción for...in dentro de esta función para recorrer el objeto de usuarios pasado a la función y devolver la cantidad de usuarios cuya onlinepropiedad está establecida en true. A continuación se muestra un ejemplo de un objeto de usuarios al que se podría pasar countOnline. Cada usuario tendrá una onlinepropiedad con un valor trueo false.









const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Only change code below this line
let result = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      result+=1;
    }
  }
  return result;
  // Only change code above this line
}

console.log(countOnline(users));