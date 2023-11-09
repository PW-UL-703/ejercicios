const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');

const app = express()
const port = 3080

const estudiante = require('./api/estudiante')

/* Esta es la parte del Middleware */
app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.json());

app.use('/api/abc/', estudiante)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './static/index.html'));
});

app.listen(port, () => {
    console.log(`Server escuchando en el port::${port}`);
});