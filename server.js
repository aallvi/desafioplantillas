const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.set('views', './views')


app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use(express.static('public'))


// ------------------------

const productos = [{
    "title":"Celular",
    "precio":30000,
    "thumbnail":"fotoCelular.jpg",
    "id":1
},{
    "title":"Computador",
    "precio":50000,
    "thumbnail":"fotoComputador.jpg",
    "id":2
},{
    "title":"Teclado",
    "precio":10000,
    "thumbnail":"fotoTeclado.jpg",
    "id":3
}
]


app.get('/productos', (req,res) => {

    res.render('productos',{productos})
} )


app.post('/productos', (req,res) => {

    productos.push(req.body)
    productos[productos.length-1].id = productos.length

    res.render('productos',{productos: productos})

} )








const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`servidor escuchando en el puerto ${server.address().port}`)
} )


server.on('error', error => console.log(`${error}`) )