El ejemplo anterior utiliza cadenas como argumento de las funciones, pero podrían ser cualquier otra cosa. El argumento a menudo puede ser un objeto del cual utilizarás datos que mostrarás en tu sitio web o en otro lugar.

Haz una función promesa que maneje el éxito y el fallo. Si responseFromServer es true, llama al método resolve para completar satisfactoriamente la promesa. Pasa a resolve una cadena con el valor We got the data. Si responseFromServer es false, utiliza el método reject y devuelve la cadena: Data not received.



const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer representa una respuesta de un servidor
  let responseFromServer;

  if(responseFromServer) {
    resolve ("We got the data");
    // Cambia esta línea
  } else { reject("Data not received"); 
    // Cambia esta línea
  }
});