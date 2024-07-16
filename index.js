// index.js
const express = require('express');
const bodyParser = require('body-parser'); // Solo si instalaste body-parser

const app = express();
const port = 3000; // Puerto en el que escuchará el servidor

// Middleware para analizar cuerpos de solicitudes JSON
app.use(bodyParser.json());

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
