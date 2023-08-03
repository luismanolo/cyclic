const path = require('path')
const express = require('express');

const app = express();
const PORT = 3000;

(async function() {
  app.use('/', express.static(path.join(__dirname, 'dist')))

  // app.use('/site', express.static(path.join(__dirname, '/dist')))
  app.use('/site/', express.static(path.join(__dirname, 'dist')))

  app.listen(PORT, () =>
    console.log(`Server listening on port: ${PORT}`),
  );

})();
