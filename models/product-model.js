const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    discount: {
        type: Array,
        default: [],
    },
    bgcolor: String,
    panelcolor: String,
    textcolor: String,
});

module.exports = mongoose.model('product', productSchema);