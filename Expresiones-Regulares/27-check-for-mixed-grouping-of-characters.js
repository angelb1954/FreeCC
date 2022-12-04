Verifique la agrupación mixta de caracteres

A veces queremos verificar grupos de caracteres usando una expresión regular y para lograr eso usamos paréntesis ().

Si desea encontrar Penguino Pumpkinen una cadena, puede usar la siguiente expresión regular:/P(engu|umpk)in/g

Luego verifique si los grupos de cadenas deseados están en la cadena de prueba utilizando el test()método.

let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
El testmétodo aquí devolvería true.

Arregle la expresión regular para que verifique los nombres de Franklin Roosevelto Eleanor Rooseveltdistinga entre mayúsculas y minúsculas y debería hacer concesiones para los segundos nombres.

Luego corrija el código para que la expresión regular que ha creado se verifique myStringy se devuelva dependiendo de si la expresión regular coincide true.false







let myString = "Eleanor Roosevelt";
let myRegex = /(Eleanor|Franklin\sD.)\sRoosevelt/; // Change this line
let result = true; // Change this line
// After passing the challenge experiment with myString and see how the grouping works
myRegex.test(myString);