const path = require('path')
const express = require('express');

const app = express();
const PORT = 3000;

(async function() {
  app.use('/', express.static(path.join(__dirname, 'dist')))

  // app.use('/site', express.static(path.join(__dirname, '/dist')))
  app.use('/site/assets', express.static(path.join(__dirname, 'dist', 'assets')))
  app.use('/site', function(req, res){
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
  })

  app.listen(PORT, () =>
    console.log(`Server listening on port: ${PORT}`),
  );

})();
