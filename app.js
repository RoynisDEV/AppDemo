const express = require('express');
const app = express()

const port = 3000

//Motor de plantilla 
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//configuracion de los middleware archivos estaticos
app.use(express.static(__dirname + "/public"));


//configurancion de las rutas / de archivos dinamricos EJS
app.get('/', (req,res)=> {
    res.render("index", {titulo: "mi tittulo que se supone que es dinamico"})
})
app.get('/nosotros',(req,res)=> {
    res.render("us",{titulo: "Esta es la pagina del informacion"})
})


//middleware de error
app.use((req, res, next) =>{
    res.status(404).render("error", {
        titulo: "404",
        descripcion: "No encontrador"
    })
})



app.listen(port, () =>{
    console.log('El servidor esta en el ', port)
})