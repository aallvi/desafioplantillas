const express = require('express')
const fs = require('fs')
const random = require('random')
const app = express()

app.get('/productos', (req,res) => {
    const productos =  fs.readFileSync('productos.json', 'utf-8')
    // const productosObj = JSON.parse(productos)
    res.send(`${productos}`)
} )
app.get('/productoRandom', (req,res) => {
    const productos =  fs.readFileSync('productos.json', 'utf-8')
    const productosObj = JSON.parse(productos)
    const idProductoRandom =  random.int((min = 1), (max = 3))
    const productoaMostrar = productosObj.filter(productos => productos.id === idProductoRandom  )

    res.send({productoaMostrar})
} )

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`servidor escuchando en el puerto ${server.address().port}`)
} )


server.on('error', error => console.log(`${error}`) )