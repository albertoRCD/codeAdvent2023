const fs = require('fs');

// Ruta al archivo .txt local
const rutaArchivo = 'data.txt';

// Lee el contenido del archivo
fs.readFile(rutaArchivo, 'utf8', (error, contenido) => {
  if (error) {
    console.error('Error al leer el archivo:', error);
    return;
  }

  // Realiza operaciones con el texto
  const resultado = procesarTexto(contenido);

  // Muestra el resultado en la consola o haz lo que necesites
  console.log(resultado);
});

// Función para procesar el texto (sustituye esto con tus propias operaciones)
function procesarTexto(texto) {

  // Ejemplo: contar la cantidad de palabras
  const palabras = texto.split(/\s+/);

  let diccionario = {
    "one" : '1',
    "two"  : '2',
    "three" : '3',
    "four" : '4',
    "five": '5',
    "six" : '6',
    "seven": '7',
    "eight": '8',
    "nine": '9',
};

for (let i = 0; i < palabras.length; i++) {
  // Reemplazar cada clave por su valor correspondiente
  for (let clave in diccionario) {
    palabras[i] = palabras[i].replace(clave, diccionario[clave]);
  }
}

  const arraySoloNumeros = palabras.map(elemento => elemento.replace(/\D/g, ''));
  let nuevoArray = [];

  for(let i=0; i<arraySoloNumeros.length; i++){
      nuevoArray.push(parseInt(arraySoloNumeros[i].slice(0,1)+arraySoloNumeros[i].slice(-1)));
  }

  return nuevoArray.reduce((x, acc) => x + acc, 0);
}