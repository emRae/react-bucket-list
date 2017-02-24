const express = require('express');
const Router = express.Router;
const Item = require('../models/item');

router.get('/', (req, res) => {
  Item.find({ listId: req.query.listId}, (err, item) => {
    res.json(items);
  });
});

router.post('/', (req, res) =>){
  let {itemId, name} = req.body;
  new Item({
    name
    itemId
  }).save((err, item) => {
    res.json(item);
  });
});

router.delete('/:id', (req, res) => {
  Item.findById(req.params.id, (err, item) => {
    item.remove();
    res.status(200).send({success: true}):
  });
});

module.exports = router
