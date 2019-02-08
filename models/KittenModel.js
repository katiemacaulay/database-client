var mongoose = require('mongoose');

var kittySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    color: String,
    cutnessScale: Number,
  });

var Kitten = mongoose.model('Kitten', kittySchema);

module.exports = Kitten;