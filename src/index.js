import cipher from './cipher.js';

// eslint-disable-next-line no-console
// Para activar y/o desactivar los link de Cifrar y Descifrar
const linkActivo = document.getElementById('link-cifrado');
const linkDesactivo = document.getElementById('link-descifrado');

linkActivo.addEventListener('click',

  () => {
    document.getElementById('link-cifrado').classList.add('link_activo');
    document.getElementById('link-descifrado').classList.remove('link_activo');
    document.getElementById('contenido-cifrar').classList.remove('display_none');
    document.getElementById('contenido-cifrar').classList.add('display_block');
    document.getElementById('contenido-descifrar').classList.remove('display_block');
    document.getElementById('contenido-descifrar').classList.add('display_none');
  });

linkDesactivo.addEventListener('click',
  () => {
    document.getElementById('link-cifrado').classList.remove('link_activo');
    document.getElementById('link-descifrado').classList.add('link_activo');
    document.getElementById('contenido-descifrar').classList.remove('display_none');
    document.getElementById('contenido-descifrar').classList.add('display_block');
    document.getElementById('contenido-cifrar').classList.remove('display_block');
    document.getElementById('contenido-cifrar').classList.add('display_none');
  });

// Para hacer un llamado cada vez que se cifre
document.getElementById('btnCifrar').addEventListener('click', () => {
  const msg = document.getElementById('mensajeAcifrar').value;
  const offset = document.getElementById('cantidadDesplazamientoC').value;
  document.getElementById('msg-cifrado-check').innerHTML = cipher.encode(offset, msg);
});

// Para hacer un llamado cada vez que se descifre
document.getElementById('btnDescifrar').addEventListener('click', () => {
  const msg = document.getElementById('mensajeAdescifrar').value;
  const offset = document.getElementById('cantidadDesplazamientoD').value;
  document.getElementById('msg-descifrado-check').innerHTML = cipher.decode(offset, msg);
});

// Para hacer un llamado cada vez que se Limpie en Cifrado
document.getElementById('btnLimpiarC').addEventListener('click', () => {
  document.getElementById('mensajeAcifrar').value = '';
  document.getElementById('cantidadDesplazamientoC').value = '';
  document.getElementById('msg-cifrado-check').innerHTML = '';
});

// Para hacer un llamado cada vez que se Limpie en Descifrado
document.getElementById('btnLimpiarD').addEventListener('click', () => {
  document.getElementById('mensajeAdescifrar').value = '';
  document.getElementById('cantidadDesplazamientoD').value = '';
  document.getElementById('msg-descifrado-check').innerHTML = '';
});
