const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const teacherSchema = new mongoose.Schema({
   
    name:{
        type:String,
        required:true
    },
    surname:{
        type:String,
       
    },
   
    date_of_birth:{
        type:String,
    },
    age:{
        type:Number
    },
    gender:{
       type:String
    },
    joining_year:{
        type:String,
        
    },
    teaching_area:{
        type:String,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
   qulification:{
    type:String,
   },
    
    mobile:{
        type:Number,
        
    },
    empolyee_id:{
        type:String,
        required:true
    }, 
    address:{
        type:String,
        
    },
   
    attdenList:[],
    markList:[],
    pList:[],
    pic:{
     type:String,
     default:"https://res.cloudinary.com/dvfpkko1z/image/upload/v1589016219/exwm2axhjign3pmawzlv.png"
    }
})


mongoose.model("Teacher",teacherSchema)