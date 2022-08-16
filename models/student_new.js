const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const studentSchema = new mongoose.Schema({
   
    name:{
        type:String,
        required:true
    },
    surname:{
        type:String,
       
    },
    mother_name:{
        type:String,
    },
    father_name:{
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
    clsName:{
        type:Number,
        required:true
    },
    addmision_year:{
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
   
    
    mobile:{
        type:Number,
        
    },
    Roll_No:{
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
     default:"https://res.cloudinary.com/cnq/image/upload/v1586197723/noimage_d4ipmd.png"
    }
})


mongoose.model("Student",studentSchema)