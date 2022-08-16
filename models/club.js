const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const clubSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
   
    description:{
        type:String,
       
    },
   
    members:[],
    date : { type : Date, default: Date.now }
})

mongoose.model("Club",clubSchema)