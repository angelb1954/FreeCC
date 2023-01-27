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


function isPalindrome(str) {
  
 str = str.replace(/W|_/g,"");

  // Invertimos la palabra y la almacenamos en una nueva variable
  let reverseWord = str.split("").reverse().join("");

  // Comparamos la palabra invertida con la original
  // Si son iguales, entonces la palabra es un palíndromo
  if (reverseWord === str) return true;
  
    return false;
  }
  console.log(isPalindrome("nope"));

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



// Cifrado César
// Uno de los cifrados más simples y ampliamente conocidos es el cifrado César , también conocido como cifrado de desplazamiento . En un cifrado por desplazamiento, los significados de las letras se modifican en una cantidad determinada.

// Un uso moderno común es el cifrado ROT13 , donde los valores de las letras se desplazan 13 lugares. Así A ↔ N, B ↔ Oy así sucesivamente.

// Escriba una función que tome una cadena codificada ROT13 como entrada y devuelva una cadena decodificada.

// Todas las letras serán mayúsculas. No transforme ningún carácter no alfabético (es decir, espacios, puntuación), pero páselos.



// def rot13_decode(s):
//     decoded = ""
//     for char in s:
//         if char.isalpha():
//             char_code = ord(char)
//             if char_code >= ord('A') and char_code <= ord('Z'):
//                 char_code += 13
//                 if char_code > ord('Z'):
//                     char_code -= 26
//             decoded += chr(char_code)
//         else:
//             decoded += char
//     return decoded
