const express = require('express');

const router = express.Router();
const Item = require('../../models/Item');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route   POST api/items
// @desc    Post an Item
// @access  Public
router.post('/', (req, res) => {
  const item = req.body;

  const newItem = new Item({
    name: item.name,
  });

  newItem.save().then(item => res.json(item));
});

// @route   DELETE api/items
// @desc    Delete an Item
// @access  Public
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Item.findById(id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false, message: err }));
});

module.exports = router;
