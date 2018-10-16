const express = require('express');
const router = express.Router();
const Item = require('../models/Item');
const User = require('../models/User')

//preguntar cómo hacer que coja él solo el seller (desde el front)
router.post('/item', (req, res, next) => {
    const { itemName, seller, price, qty } = req.body;

    return new Item({
        itemName,
        seller,
        price,
        qty
    }).save().then(() => { res.status(200).json({ status: 'objeto guardado' }) })
        .catch(e => next(e));

})
//recoger articulos desde la base de datos
router.get('/item', (req, res, next) => {
    Item.find()
        .then(data => res.status(200).json(data))
        .catch(e => next(e))
})

// - quiero que me devuelva todos los objetos, por eso no le paso parámetro -


//filtrar por rol
router.get('/user', (req, res, next) => {
    User.find()
        .then(data => res.status(200).json(data))
        .catch(e => next(e))
})

router.get('/user/:_id', (req, res, next) => {
    console.log(req.params._id)
    User.findById({ _id: req.params._id })
        .then(data => res.status(200).json(data))
        .catch(e => next(e))
})


// borrar los objetos por ID
/* router.delete('/item/:id',(req,res,next) => {
    const {id} = req.params;
    Model.findByIdAndRemove(id)
        .then( obj => {
            if(obj){
                res.status(200).json({status:`Removed from db`});
            }else{
                throw new Error("Not existing ID");
            }
        })
        .catch(e => next(e))
}) */


module.exports = router;
