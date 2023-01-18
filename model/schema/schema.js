const mongoose = require('mongoose');

const compoundSchema = new mongoose.Schema({
    name: String,
    description: String,
    imageLink: String
});

module.exports = mongoose.model('compound', compoundSchema)