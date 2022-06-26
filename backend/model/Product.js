const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {type: String},
    email: {type: String},
    country: {type: String},
    noofperson: {type: String},
    currency: {type: String},
})

const Product = mongoose.model('products', productSchema);

module.exports = {
    Product
}