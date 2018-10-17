const express = require('express');
const router = express.Router();
const Item = require('../models/Item');
const User = require('../models/User');
const Restaurant = require('../models/Restaurant');

router.post('/item', (req, res, next) => {
    const { itemName, sellerId, sellerName, price, qty } = req.body;

    return new Item({
        itemName,
        sellerId,
        sellerName,
        price,
        qty
    }).save().then(() => { res.status(200).json({ status: 'objeto guardado' }) })
        .catch(e => next(e));

})

router.get('/item', (req, res, next) => {
    Item.find()
        .then(data => res.status(200).json(data))
        .catch(e => next(e))
})

router.get('/item/sellerId', (req, res, next) => {
    Item.find({ sellerId: req.params.sellerId })
        .then(data => res.status(200).json(data))
        .catch(e => next(e))
})

router.get('/user', (req, res, next) => {
    User.find({ role: "seller" })
        .then(data => res.status(200).json(data))
        .catch(e => next(e))
})

router.get('/user/:_id', (req, res, next) => {
    User.findById({ _id: req.params._id })
        .then(data => res.status(200).json(data))
        .catch(e => next(e))
})

//desde aquí las rutas de los restaurantes

router.post('/signupRest', (req, res, next) => {

    const { name, phone, description, adress, owner } = req.body;

    if (!name || !phone || !description || !adress || !owner) {
        next(new Error('You must provide valid credentials'));
    }

    Restaurant.findOne({ name })
        .then(foundRestaurant => {
            if (foundRestaurant) throw new Error('Restaurant already exists');
            return new Restaurant({
                name,
                phone,
                description,
                adress,
                owner
            }).save();
        })
        .then(restaurant => res.json({ status: 'signup successfully', restaurant })) // Answer JSON
        .catch(e => next(e));
}); 

//esto devolverá todos los restaurantes
router.get('/restaurant', (req, res, next) => {
    Restaurant.find({})
        .then(data => res.status(200).json(data))
        .catch(e => next(e))
})

router.get('/restaurant/:_id', (req, res, next) => {
    Restaurant.findById({ _id: req.params._id })
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
