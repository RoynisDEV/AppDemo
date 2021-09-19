const express = require('express');
const app = express()

const port = process.env.PORT || 3000;

//Motor de plantilla 
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//configuracion de los middleware archivos estaticos
app.use(express.static(__dirname + "/public"));

//Rutas Webs
app.use('/', require('./router/RutasWeb'));

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