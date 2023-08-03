const path = require('path')
const express = require('express');

const app = express();
const PORT = 3000;

(async function() {

  // app.use('/app/static', express.static(path.join(__dirname, 'dist/assets')));
  // app.use('/app', express.static(path.join(__dirname, 'dist')));
  // app.get('/app/', function(req, res) {
  //   res.sendFile('/dist/index.html');
  // });

  app.use('/', express.static(path.join(__dirname, 'dist')))
  app.listen(PORT, () =>
    console.log(`Server listening on port: ${PORT}`),
  );

})();
