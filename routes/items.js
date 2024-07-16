const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// GET all items
router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.json({ message: err });
    }
});

// GET a specific item
router.get('/:itemId', async (req, res) => {
    try {
        const item = await Item.findById(req.params.itemId);
        res.json(item);
    } catch (err) {
        res.json({ message: err });
    }
});

// POST a new item
router.post('/', async (req, res) => {
    const item = new Item({
        name: req.body.name,
        description: req.body.description
    });

    try {
        const savedItem = await item.save();
        res.json(savedItem);
    } catch (err) {
        res.json({ message: err });
    }
});

// DELETE an item
router.delete('/:itemId', async (req, res) => {
    try {
        const removedItem = await Item.findByIdAndDelete(req.params.itemId);
        if (!removedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.json({ message: 'Item deleted successfully', item: removedItem });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// UPDATE an item
router.patch('/:itemId', async (req, res) => {
    try {
        const updatedItem = await Item.updateOne(
            { _id: req.params.itemId },
            { $set: { name: req.body.name, description: req.body.description } }
        );
        res.json(updatedItem);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
