const express = require('express');
const fruitRouter = express.Router();
const Fruit = require('../models/fruits');

//index
fruitRouter.get('/', async(req, res) => {
    const fruits = await Fruit.find({});
    res.json(fruits);
})

// Create
fruitRouter.post('/', async (req, res) => {
    const fruit = await Fruit.create(req.body);
    res.json(fruit)
})

module.exports = fruitRouter;