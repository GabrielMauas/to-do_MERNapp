const mongoose = require('mongoose');

const Item = mongoose.Schema({

    name: {
        type: String
    },
    priority: {
        type: String
    }
})

module.exports = mongoose.model('Item', Item);