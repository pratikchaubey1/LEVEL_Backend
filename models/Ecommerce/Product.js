const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title : {
        type : String,
        required:true,
        trim :true
    },
    description : {
        type: String,
        required:true,
        trim: true,
        min : 10,
        max : 60
    },
    productImage : {
        type: [{String}]
    },
    price : {
        type : Number,
        default : 0
    },
    stock : {
        type:Number,
        default : 0
    },
    category : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Category',
        required:true
    },
    owner : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps:true})

const Product = mongoose.model('Product',productSchema)

module.exports = Product