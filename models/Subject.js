const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({

    sub_name:{
        type: String, 
    },
   
    sub_code:{
        type: String, 
    },
    sub_class:{
        type: Number, 
    },
    sub_credit:{
        type:Number,
      
    },
    sub_type:{
        type: String, 
    }
  



}, { timestamps: true });

module.exports = mongoose.model("Subject", subjectSchema);

