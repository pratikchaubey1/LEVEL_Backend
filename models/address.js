const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    pinCode : {
        type : String,
        required : true
    },
    state : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    houseNo : {
        type : String,
        required : true
    },
    area : {
        type : String,
        required : true
    }
})


const Address = mongoose.model('Address',addressSchema)

module.exports = Address