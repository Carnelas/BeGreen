const express = require('express');
const router = express.Router();
const Item = require('../models/Item');


//preguntar cómo hacer que coja él solo el seller
router.post('/add', (req, res, next) => {
    const { itemName, seller, price } = req.body;

    return new Item({
        itemName,
        seller,
        price
    }).save().then(() => {res.status(200).json({status: 'objeto guardado'})})
    .catch(e => next(e));

})


/* router.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
}) */

module.exports = router;
