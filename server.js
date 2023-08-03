const express = require('express');
const path = require('path')

const app = express();
const PORT = 3000;

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });
//
app.use('/', express.static(path.join(__dirname, 'dist')))
app.use('/site', express.static(path.join(__dirname, 'dist')))

// app.use('/site/', function(req, res, next) {
//   res.sendFile(path.join(__dirname, 'dist/index.html'))
//   next();
// })

// app.get('/site', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
// });
// app.use('/site/assets', express.static(path.join(__dirname, 'dist', 'assets')))


app.listen(PORT, () =>
  console.log(`Server listening on port: ${PORT}`),
);
