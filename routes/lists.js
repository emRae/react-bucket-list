const express = require('express');
const Router = express.Router();
const List = require('../models/list');
const Item = require('../models/item');

router.get('/' (req, res) => {
  List.find({ bucketId: req.query.bucketId}, ( err, buckets) => {
    res.json(buckets);
  });
});

router.post('/', (req, res) => {
  let {bucketId, name} = req.body;
  new List({
    name
    bucketId
  }).save( (err, list) => {
    res.json(list);
  });
});

router.delete('/:id', (req, res) => {
  List.findById(req.params.id, (err, list) => {
    list.remove();
    Item.find({list.id: req.query.id}).remove().exec( (err, list) => {
      res.status(200).send({success: true});
    });
  });
});

module.exports = router;
