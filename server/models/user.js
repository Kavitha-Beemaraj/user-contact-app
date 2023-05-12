const mongoose= require('mongoose')

const userSchema= new mongoose.Schema({
    name:{
        type: String,
        requried: true
    },
    age:{
        type: Number,
        requried: true,
        min: 21,
        max: 35
    },
    email: {
        type:String,
        minlength:7,
        lowercase: true
    },
    mobile: {
        type:Number,
        minlength:10,
        required: true,
    },
    registeredDate:{
        type: Date,
        requried: true,
        default: Date.now
    },
})

module.exports=mongoose.model('User', userSchema)