const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    phoneNo : {
        type: String,
        required: true,
        min : 10,
        max : 10
    },
    address : {
        type : String,
        required : true
    },
    pinCode : {
        type: String,
        required : true
    },
    state : {
        type : String,
        required: true
    },
    city : {
        type:String,
        required:true
    },
    HouseNo : {
        type: String,
        required:true
    },
    areaName : {
        type: String,
        required:true
    }
})

const Address = mongoose.model("Address",addressSchema)

module.exports = Address