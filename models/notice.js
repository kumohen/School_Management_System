const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const noticeSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
   
    content:{
        type:String,
        required:true
    },
    data_pub : { type : Date, default: Date.now }
})

mongoose.model("Notice",noticeSchema)