// Invertir una cadena

// Invierta la cadena proporcionada y devuelva la cadena invertida.

// Por ejemplo, "hello"debería convertirse en "olleh".

// function reverseString(str) {
//   return str.split("").reverse().join("");
//   };

// //Otra solución:

// function reverseString(str) {
//   let str2="";
//   for (let i = str.length-1; i >= 0; i--) {
//     str2+=str[i];
//   }
// return str2;
// };

//  console.log(reverseString("hello"));

function factorialize(num) {
  let num2 = 1;
  for (let i = num.length; i > 0; i--) {
    num2 *= num[i];
    return num2;
  }
}

console.log(factorialize(5));
