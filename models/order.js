const mongoose = require('mongoose')

const orderItemSchema = mongoose.Schema({
     productId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Product'
     },
     quantity : {
        type : Number,
        required:   true
     }
})
const orderSchema = new mongoose.Schema({
    orderPrice : {
        type : Number,
        required : true
    },
    customer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    orderItems : {
  type : [orderItemSchema]
    },
    address : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Address"
    },
    process : {
        type : String,
        enum : ['PENDING','CANCELLED', 'DELIVERED'],
        default : 'PENDING'
    }
} , {timestamps:true})


const Order = mongoose.model('Order',orderSchema)
module.exports = Order