const express = require('express')
const ruta = express.Router()

ruta.post('/', async(req, res) => {
    console.log("Hola aqui estoy");

    datafront = req.body;
    console.log(datafront);

    data = {
        "mensaje": "hola frontend"
    }
    res.status(200).json(data)
})

module.exports = ruta