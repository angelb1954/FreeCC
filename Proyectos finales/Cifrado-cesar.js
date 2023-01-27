function decodificarROT13(cadenaCodificada) {
  let decodificado = "";
  for (let i = 0; i < cadenaCodificada.length; i++) {
    let char = cadenaCodificada[i];
    if (char.match(/[A-Z]/)) {
      let charCode = char.charCodeAt(0);
      charCode += 13;
      if (charCode > 90) {
        charCode -= 26;
      }
      decodificado += String.fromCharCode(charCode);
    } else {
      decodificado += char;
    }
  }
  return decodificado;
}

console.log(decodificarROT13("SERR PBQR PNZC"));