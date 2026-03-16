const express = require('express');
const app = express();

const hostname = '0.0.0.0';
const port = 3000;

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', __dirname);


app.get('/', (req, res) => {
  res.render('cats');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});