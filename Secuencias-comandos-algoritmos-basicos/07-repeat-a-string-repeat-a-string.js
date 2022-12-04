Repetir una cadena Repetir una cadena

Repetir una cadena dada str(primer argumento) por numtiempos (segundo argumento). Devuelve una cadena vacía si numno es un número positivo. A los efectos de este desafío, no utilice el .repeat()método incorporado.



function repeatStringNumTimes(str, num) {
  if(num<0){
    return ("");
  }
  let result = Array(num + 1).join(str);
  return result;
}

repeatStringNumTimes("abc", 3);