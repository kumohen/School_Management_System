const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const Student = mongoose.model("Student")
const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
const requireLogin = require('../middleware/requireLogin')

const transporter = nodemailer.createTransport(
    sendGridTransport({
      auth: {
        api_key: "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",
      },
    })
  );


  
router.post('/stuReg',(req,res)=>{
    console.log(req.body)
   const {name,surname,mother_name,father_name,date_of_birth,age,gender,addmision_year,address,
    email,password,Roll_No,clsName,mobile} = req.body 
//   console.log(req.body )
  if(!email || !password || !name || !Roll_No || !clsName){
     return res.status(422).json({error:"please add all the fields"})
  }
  Student.findOne({email:email})
  .then((savedUser)=>{
      if(savedUser){
        return res.status(422).json({error:"user already exists with that email"})
      }
      bcrypt.hash(password,12)
      .then(hashedpassword=>{
            const user = new Student({
               
                password:hashedpassword,surname,mother_name,father_name,date_of_birth,age,gender,addmision_year,address,
                name,email,Roll_No,clsName,mobile
                
            })
         
            user.save()
            .then(user=>{
                
                res.json({message:"saved successfully"})
            })
            .catch(err=>{
                console.log(err)
            })
      })
     
  })
  .catch(err=>{
    console.log(err)
  })
})


router.post('/StuSign',(req,res)=>{
  const {email,password} = req.body
  console.log(req.body)
  if(!email || !password){
     return res.status(422).json({error:"please add email or password"})
  }
  Student.findOne({email:email})
  .then(savedUser=>{
      if(!savedUser){
         return res.status(422).json({error:"Invalid Email or password"})
      }
      console.log(savedUser)
      bcrypt.compare(password,savedUser.password)
      .then(doMatch=>{
          if(doMatch){
           
              // res.json({message:"successfully signed in"})
             const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
             const {_id,name,email,pic,mobile,Roll_No,clsName,isAdmin,surname,father_name,mother_name,addmision_year,address,date_of_birth,age,gender} = savedUser
             
             res.json({token,user:{_id, name,email,pic,mobile,Roll_No,clsName,isAdmin,surname,father_name,mother_name, gender, addmision_year,address,date_of_birth,age}})
          }
          else{
              return res.status(422).json({error:"Invalid Email or password"})
          }
      })
      .catch(err=>{
          console.log(err)
      })
  })
})

router.post('/getStuByClass',(req,res)=>{
  console.log(req.body)
    Student.find({clsName:req.body.clsName})
    
  
    .then(posts=>{
        res.json(posts)
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/getAllStuClass',(req,res)=>{
 
    Student.find()
    
  
    .then(posts=>{
        res.json(posts)
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/makeAttdence' ,async(req,res)=>{
    
    const posts = await Student.find({_id:req.body.StudentId})
    const {timestamp,type,StudentId,dateId} = req.body
    const obj = {
      timestamp,type,StudentId,dateId,
      madeBy:"admin"
    }
    posts[0].attdenList.push(obj);
    posts[0].pList.push(dateId);
    posts[0].save();
    res.json(posts)
})

router.post('/uploadMark' ,async(req,res)=>{
    
  const student = await Student.find({_id:req.body.id})
  const { id,sem,smark,subject} = req.body
  const obj = {
    id,sem,smark,subject
  }
  student[0].markList.push(obj);
  student[0].save();
  res.json(student)
})

router.post("/profile", (req, res) => {
  
  console.log(req.body)
  Student.find({ _id: req.body.id })
  .select("-password")
  .then((admins) => {
    res.json(admins);
  })
  .catch((err) => {
    console.log(err);
  });
  });

  router.put('/updatepic',requireLogin,(req,res)=>{
    console.log(req.user)
    Student.findByIdAndUpdate(req.user._id,{$set:{pic:req.body.pic}},{new:true},
        (err,result)=>{
         if(err){
             return res.status(422).json({error:"pic canot post"})
         }
         res.json(result)
         console.log(result)
    })
 
})

router.post('/stuUpd', async(req,res)=>{

 const {name,surname,mother_name,father_name,gender,addmision_year,address,
  clsName,mobile,userId} = req.body 
//   console.log(req.body )
    

   const student = await Student.findOne({_id:userId})
   student.name = name 
   student.surname = surname
   student.mother_name = mother_name
   student.father_name=father_name
   student.gender=gender
   student.addmision_year=addmision_year
   student.clsName=clsName
   student.mobile=mobile
   student.address = address 

   await student.save()

})



module.exports = router