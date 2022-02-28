const mongoose = require('mongoose');

const AnimeSChema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    season: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }, fechaCreacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Anime', AnimeSChema);