const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render("index",{titulo : "mi titulo dinamico"})
})

router.get('/nosotros', (req,res)=>{
    res.render("us",{tituloUs: "Este es el titulo mas perro"})
})

module.exports = router;