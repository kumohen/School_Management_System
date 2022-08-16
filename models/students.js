const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const studentSchema = new mongoose.Schema({
   
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    clsName:{
        type:Number,
        required:true
    },
    
    mobile:{
        type:Number,
        
    },
    Roll_No:{
        type:String,
        required:true
    },
    isAdmin:{
       type:Boolean,
       default:false
    },
    attdenList:[],
    markList:[],
    pList:[],
    pic:{
     type:String,
     default:"https://res.cloudinary.com/dvfpkko1z/image/upload/v1589016219/exwm2axhjign3pmawzlv.png"
    }
})


mongoose.model("Student",studentSchema)