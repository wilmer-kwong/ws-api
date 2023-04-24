const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    code: {
        required: true,
        type: String
    },
    text: String,
    rarity: String,
    color: String,
    type: String,
    level: Number,
    cost: Number,
    power: Number,
    soul: Number,
    traits: [String],
})

module.exports = mongoose.model('card', cardSchema);