const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fruitsSchema = new Schema({
    name: String,
    price: Number,
    image: String,
    quantity: Number,
    category: String

}, {timestamps: true});

module.exports = mongoose.model('Fruit',fruitsSchema );