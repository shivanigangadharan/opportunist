const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    link: {
        type: String,
        required: true
    },
    opp_type: {
        type: String
    },
    gender: {
        type: Array
    },
    education: {
        type: String
    },
    application_start: {
        type: String,
    },
    application_end: {
        type: String
    },
    stipend: {
        type: String
    },
    location: {
        type: String
    }
});


//here, the first parameter in the .model() function is the name of the collection (table)
module.exports = Item = mongoose.model('open-source programs', ItemSchema);
