// Comprobar si un objeto tiene una propiedad

// Ahora podemos agregar, modificar y eliminar claves de objetos. Pero, ¿y si solo quisiéramos saber si un objeto tiene una propiedad específica? JavaScript nos proporciona dos formas diferentes de hacer esto. Uno usa el hasOwnProperty()método y el otro usa la inpalabra clave. Si tenemos un objeto userscon una propiedad de Alan, podemos verificar su presencia de cualquiera de las siguientes maneras:

// users.hasOwnProperty('Alan');
// 'Alan' in users;
// Ambos regresarían true.

// Termine de escribir la función para que regrese truesi el objeto que se le pasó contiene los cuatro nombres, , Alany regresa de lo contrario.JeffSarahRyanfalse







// let users = {
//   Alan: {
//     age: 27,
//     online: true
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: true
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };

// function isEveryoneHere(userObj) {
//   // Only change code below this line

// return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
//     userObj.hasOwnProperty(name)
//   );
// }
//   // Only change code above this line


// console.log(isEveryoneHere(users));


// Código Explicación
// Utiliza una matriz con todos los nombres que deberían estar presentes en el objeto.
// El everymétodo se usa para validar todos los nombres usados ​​junto con el hasOwnPropertyresultado del método en un valor trueque se devuelve durante cada iteración.
// Si no se encuentra al menos un nombre usando el hasOwnPropertymétodo, el everymétodo devuelve false.


// Otra solución:

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  if (
    userObj.hasOwnProperty("Alan") &&
    userObj.hasOwnProperty("Jeff") &&
    userObj.hasOwnProperty("Sarah") &&
    userObj.hasOwnProperty("Ryan")
  ) {
    return true;
  }
  return false;
}

console.log(isEveryoneHere("users"));


// Código Explicación

// Comprueba si el objeto contiene todos los usuarios utilizando el hasOwnPropertymétodo para cada nombre con el &&operador para devolver un valor true o false.