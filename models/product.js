const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    description : {
        type : String,
        required : true,
        trim : true
    },
    productName : {
        type: String,
        required:true
    },
    price : {
        type : Number,
        required: true,
        default : 0
    },
    productImage : {
        type : [{String}],
        required : true
    },
    stock : {
        type : Number,
        default: 0
    },
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Category"
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
}, {timestamps:true})

const Product = mongoose.model("Product",categorySchema)

module.exports = Product