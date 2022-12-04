// Los nombres de usuario solo pueden usar caracteres alfanuméricos.

// Los únicos números en el nombre de usuario deben estar al final. Puede haber cero o más de ellos al final. El nombre de usuario no puede comenzar con el número.

// Las letras del nombre de usuario pueden ser minúsculas y mayúsculas.

// Los nombres de usuario deben tener al menos dos caracteres. Un nombre de usuario de dos caracteres solo puede usar letras del alfabeto como caracteres.

// /(^[a-z]{2})(a-e)([0-9]*)/gi

// let ohStr = "Ohhh no";
// let ohRegex = /^[n-p]h{3,6}\s[no]$/; // Change this line
// let result = ohRegex.test(ohStr);

// console.log(result);