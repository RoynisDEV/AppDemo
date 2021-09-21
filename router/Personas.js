const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render("personas",{
        arrayPerson: [
            {id:'00001', nombre:'LordG', descripcion:'descripcion de LordG', clasificacion:'Safe'},
            {id:'00002', nombre:'Jorge', descripcion:'descripcion de jorge', clasificacion:'Keter'},
        ] 
    })
})
module.exports = router;
