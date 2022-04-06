const express = require('express')
const fs = require('fs')
const random = require('random')
const app = express()

const routerProductos = express.Router()

app.use('/api/productos', routerProductos)

routerProductos.use(express.json())
routerProductos.use(express.urlencoded({extended:true}))

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

routerProductos.get('/', (req,res) => {

    res.json(productos)
} )


routerProductos.post('/', (req,res) => {

    productos.push(req.body)
    productos[productos.length-1].id = productos.length

    res.json(productos)
} )


routerProductos.put('/:id', (req,res) => {
    const id = parseInt(req.params.id)
    


   let found = productos.find(item => item.id === id)

   if(!found){

          
          return res.json('No existe producto con ese id')
   }


    productos.map(function(item){
        if(item.id === id){
          item.title = req.body.title;
          res.json( productos)

        } 
        
       
      });



} )

routerProductos.delete('/:id', (req,res) => {
    const id = parseInt(req.params.id)

    let found = productos.find(item => item.id === id)

   if(!found){

          
          return res.json('No existe producto con ese id')
   }
     const productosFiltrados = productos.filter(item => item.id !== id )
     
   

    res.json( productosFiltrados)
} )






const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`servidor escuchando en el puerto ${server.address().port}`)
} )


server.on('error', error => console.log(`${error}`) )