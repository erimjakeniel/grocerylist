const Item = require('./model.js');


module.exports.create = (req, res) => {
   
    const newItem = new Item({
        item: req.body.item, 
        quantity: req.body.quantity,
        priority: req.body.priority
    });

    
    newItem.save()
    .then(data => {
        res.send(data);
        console.log(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Item."
        });
    });
};



exports.findAll = (req, res) => {
    Item.find()
    .then(items => {
        res.send(items);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};


exports.findOne = (req, res, id) => {
    Item.findById(id)
    .then(items => {
        if(!items) {
            return res.status(404).send({
                message: "Note not found with id " + id
            });            
        }
        res.send(items);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving item with id " + id
        });
    });
};


exports.update = (req, res, id) => {
    
    Item.findByIdAndUpdate(id, {
        item: req.body.item, 
        quatity: req.body.quatity,
        priority: req.body.priority
    }, {new: true})
    .then(items => {
        if(!items) {
            return res.status(404).send({
                message: "Note not found with id " + id
            });
        }
        res.send(items);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + id
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + id
        });
    });
};


