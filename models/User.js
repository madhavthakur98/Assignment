const {Schema, default: mongoose} =require('mongoose');

const userSchema = new Schema({
    name : {
        type :String,
        require :true ,
        unique :true
    },
    email :{
        type : String,
        required :true
    },
    password : {
        type :String,
        require :true
    }

})


module.exports = mongoose.model('user',userSchema);