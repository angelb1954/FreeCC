Truncar una cadena

Trunca una cadena (primer argumento) si es más larga que la longitud máxima de cadena dada (segundo argumento). Devuelve la cadena truncada con un ...final.




function truncateString(str, num) {
  if(str.length>num){
    return str.slice(0,num)+"..."
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);