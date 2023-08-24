const path = require('path')
const express = require('express');
// const mongoose = require('mongoose');

const app = express();
const PORT = 3000;
// const MONGODB_URL = "mongodb://root:root@localhost:27017/mongoose?authSource=admin";

const start = async () => {
  try {

    // await mongoose.connect(
    //   MONGODB_URL
    // );

    // Enrutado de la aplicación en /app
    // Hay que cambiar en router el siguiente parámetro
    // history: createWebHistory('/app/'),
    app.use('/app/static', express.static(path.join(__dirname, 'dist/assets')));
    app.use('/app', express.static(path.join(__dirname, 'dist')));
    app.get('/app/', function(_, res) {
      res.sendFile('/dist/index.html');
    });

    app.use('/', (req, res) => {
      res.send("Ir a la ruta /app")
    });

    app.listen(PORT, () =>
      console.log(`Server listening on port: ${PORT}`),
    );

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();

