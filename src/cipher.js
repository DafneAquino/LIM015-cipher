const cipher = {
  encode: (offset, msg) => {
    // Manejo de excepciones Throw
    if (offset == null || offset == 0) {
      throw new TypeError('valor inválido');
    }
    let msgCifrado = '';
    // Recorrido de caracteres con el bucle for
    for (let i = 0; i < msg.length; i++) {
      // Obtener el codigo ASSCI de cada elemento del mensaje
      let letraAscii = msg.charCodeAt(i);

      // Parámetros para mayúsculas
      if (letraAscii >= 65 && letraAscii <= 90) {
        // Para valor positivo del offset
        if (offset > 0) {
          letraAscii = ((letraAscii - 65 + parseInt(offset,10)) % 26 + 65);
        } else {
          // Para valor negativo del offset
          letraAscii = ((letraAscii - 90 + parseInt(offset,10)) % 26 + 90);
        }
        msgCifrado += String.fromCharCode(letraAscii);
        // eslint-disable-next-line brace-style
      }

      // parámetros para minúsculas
      else if (letraAscii >= 97 && letraAscii <= 122) {
        // Para valor positivo del offset
        if (offset > 0) {
          letraAscii = ((letraAscii - 97 + parseInt(offset,10)) % 26 + 97);
        } else {
          // Para valor negativo del offset
          letraAscii = ((letraAscii - 122 + parseInt(offset,10)) % 26 + 122);
        }
        msgCifrado += String.fromCharCode(letraAscii);
      }

      // parámetros para valores especiales
      // espacio=32 y @=64 en posiciones ascii
      else if (letraAscii >= 32 && letraAscii <= 64) {
        // Para valor positivo del offset
        if (offset > 0) {
          letraAscii = ((letraAscii - 32 + parseInt(offset,10)) % 33 + 32);

        } else {
          // Para valor negativo del offset
          letraAscii = ((letraAscii - 64 + parseInt(offset,10)) % 33 + 64);
        }
        msgCifrado += String.fromCharCode(letraAscii);
      }
    }
    // Para que lo del for se aplique a todo el mensaje
    return msgCifrado;
  },

  decode: (offset, msg) => {
    // Manejo de excepciones Throw
    if (offset == null || offset == 0) {
      throw new TypeError('valor inválido');
    }
    let msgDescifrado = '';
    // Recorrido de caracteres
    for (let i = 0; i < msg.length; i++) {
      // Obtener el codigo ASSCI de cada elemento del mensaje
      let letraAscii = msg.charCodeAt(i);

      // Parámetros para MAYÚSCULAS
      if (letraAscii >= 65 && letraAscii <= 90) {
        // Para valor si offset es positivo
        if (offset >= 0) {
          // Para valor si offset es positivo
          letraAscii = ((letraAscii - 90 - parseInt(offset,10)) % 26 + 90);
        } else {
          // Para valor si offset es negativo
          letraAscii = ((letraAscii - 65 - parseInt(offset,10)) % 26 + 65);
        }
        msgDescifrado += String.fromCharCode(letraAscii);
      }

      // Parámetros para MINÚSCULAS
      else if (letraAscii >= 97 && letraAscii <= 122) {
        // Para valor si offset es positivo
        if (offset > 0) {
          letraAscii = ((letraAscii - 122 - parseInt(offset,10)) % 26 + 122);
        } else {
          // Para valor si offset es negativo
          letraAscii = ((letraAscii - 97 - parseInt(offset,10)) % 26 + 97);
        }
        msgDescifrado += String.fromCharCode(letraAscii);
      }

      // Parámetros para valores especiales
      // espacio=32 y @=64 en posiciones ascii
      else if (letraAscii >= 32 && letraAscii <= 64) {
        // Para valor si offset es positivo
        if (offset > 0) {
          letraAscii = ((letraAscii - 64 - parseInt(offset,10)) % 33 + 64);
        } else {
          // Para valor si offset es negativo
          letraAscii = ((letraAscii - 32 - parseInt(offset,10)) % 33 + 32);
        }
        msgDescifrado += String.fromCharCode(letraAscii);
      }
    }
    // Para que lo del for se aplique a todo el mensaje
    return msgDescifrado;
  },
};
export default cipher;
