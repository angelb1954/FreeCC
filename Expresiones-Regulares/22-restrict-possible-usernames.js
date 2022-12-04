Restringir posibles nombres de usuarios



let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i // Change this line
let result = userCheck.test(username);






Solución 1
 
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);
console.log(result)
Código Explicación
^- inicio de entrada
[a-z]- el primer carácter es una letra
[a-z]+- los siguientes caracteres son letras
\d*$- la entrada termina con 0 o más dígitos
|- o
^[a-z]- el primer carácter es una letra
\d\d+- los siguientes caracteres son 2 o más dígitos
$- fin de entrada


Solución 2 

let username = "JackOfAllTrades";
const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result = userCheck.test(username);
Código Explicación
^- inicio de entrada
[a-z]- el primer carácter es una letra
[0-9]{2,}- termina con dos o más números
|- o
[a-z]+- tiene una o más letras al lado
\d*- y termina con cero o más números
$- fin de entrada
i- ignorar caso de entrada


