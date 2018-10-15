const express = require('express');
const router = express.Router();
const Item = require('../models/Item');


//preguntar cómo hacer que coja él solo el seller (desde el front)
router.post('/item', (req, res, next) => {
    const { itemName, seller, price, qty } = req.body;

    return new Item({
        itemName,
        seller,
        price,
        qty
    }).save().then(() => {res.status(200).json({status: 'objeto guardado'})})
    .catch(e => next(e));

})

//recoger articulos desde la base de datos
router.get('/item', (req,res,next) => {
    Item.find()
    .then(data => res.status(200).json(data))
    .catch(e => next(e))
}
)
// borrar los objetos por ID
/* router.delete('/:id',(req,res,next) => {
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

/* router.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
}) */

router.get('/items/:id', (req, res, next)=>{

    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
  
    // our projects have array of tasks' ids and 
    // we can use .populate() method to get the whole task objects
    //                                   ^
    //                                   |
    //                                   |
    Project.findById(req.params.id).populate('tasks')
      .then(response => {
        res.json(response);
      })
      .catch(err => {
        res.json(err);
      })
  })

module.exports = router;
