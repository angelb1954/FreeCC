// Palindromo


// function isPalindrome(word) {
//   // Convertimos la palabra a minúsculas y la almacenamos en una variable
//   word = word.toLowerCase();

//   // Invertimos la palabra y la almacenamos en una nueva variable
//   var reverseWord = word.split("").reverse().join("");

//   // Comparamos la palabra invertida con la original
//   // Si son iguales, entonces la palabra es un palíndromo
//   if (reverseWord === word) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Convertir numeros decimales a numeros romanos

function decimalToRoman(decimal) {
  // Arreglo de números romanos
  var roman = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  // Arreglo de números decimales correspondientes a los números romanos
  var decimalValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  var romanNumeral = "";

  // Para cada valor decimal en el arreglo, obtenemos su número romano equivalente
  // y lo agregamos al resultado final.
  for (var i = 0; i < decimalValues.length; i++) {
    while (decimal >= decimalValues[i]) {
      romanNumeral += roman[i];
      decimal -= decimalValues[i];
    }
  }

  return romanNumeral;
}


console.log(decimalToRoman(1914));



//Suma todos los valores de un rango

// Define la variable acumuladora con el valor inicial de 0
var suma = 0;

// Itera sobre cada número en el rango
for (var num = 1; num <= 10; num++) {
  // Suma cada número al acumulador
  suma += num;
}

// Imprime el resultado final
console.log(suma); // Salida: 55



