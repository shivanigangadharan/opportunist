const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);
