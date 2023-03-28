exports.Products = [
    {
        id : 5,
        name : 'Something',
        price : 300,
        category : "Old",
        details : "New"
    }
]
const { text } = require('express');
const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    id : {
        type : Number,
        required : [true, "Refresh and check again"],
        unique : [true, "Please Id Change"]
    },
    name : {
        type : String,
        required : [true, "Name is Empty"]
    },
    price : {
        type : Number,
        required : [true, "Price is Empty"]
    },
    category : {
        type : String,
        required : [true, "Category is Empty"]
    },
    details : {
        type : String,
        required : [true, "Details is Empty"]
    }
})
const Product = mongoose.model("Products", productSchema);
module.exports = Product;