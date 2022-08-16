const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const Student = mongoose.model("Student")
const Teacher = mongoose.model("Teacher")
const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
const requireLogin = require('../middleware/Tlogin')

const transporter = nodemailer.createTransport(
    sendGridTransport({
      auth: {
        api_key: "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",
      },
    })
  );


  
router.post('/teachReg',(req,res)=>{
    console.log(req.body)
   const {name,surname,date_of_birth,age,gender,joining_year,address,
    email,password,empolyee_id,mobile,qulification} = req.body 
//   console.log(req.body )
  if(!email || !password || !name || !empolyee_id ){
     return res.status(422).json({error:"please add all the fields"})
  }
  Teacher.findOne({email:email})
  .then((savedUser)=>{
      if(savedUser){
        return res.status(422).json({error:"user already exists with that email"})
      }
      bcrypt.hash(password,12)
      .then(hashedpassword=>{
            const user = new Teacher({
               
                password:hashedpassword,surname,date_of_birth,age,gender,joining_year,address,
                name,email,empolyee_id,mobile,qulification
                
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



router.post('/TecSign',(req,res)=>{
  const {empolyee_id,password} = req.body

  console.log(req.body)
 
  if(!empolyee_id || !password){
     return res.status(422).json({error:"please add email or password"})
  }
  Teacher.findOne({empolyee_id:empolyee_id})
  .then(savedUser=>{
      if(!savedUser){
         return res.status(422).json({error:"Invalid Email or password"})
      }
      bcrypt.compare(password,savedUser.password)
      .then(doMatch=>{
          if(doMatch){
              // res.json({message:"successfully signed in"})
             const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
             const {name,surname,date_of_birth,age,gender,joining_year,address,
              email,empolyee_id,mobile,_id} = savedUser
             res.json({token,user:{name,surname,date_of_birth,age,gender,joining_year,address,
              email,empolyee_id,mobile,_id}})
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

router.get('/getAllFac',(req,res)=>{
  
    Teacher.find()
    
  
    .then(posts=>{
        res.json(posts)
    })
    .catch(err=>{
        console.log(err)
    })
})


router.post('/makeAttdence',requireLogin ,async(req,res)=>{
    
    const posts = await Student.find({_id:req.body.StudentId})
    const {timestamp,type,StudentId,dateId} = req.body
    const obj = {
      timestamp,type,StudentId,dateId,
      madeBy:req.user.name
    }
    posts[0].attdenList.push(obj);
    posts[0].pList.push(dateId);
    posts[0].save();
    res.json(posts)
})

router.post('/uploadMark',requireLogin ,async(req,res)=>{
    
  const student = await Student.find({_id:req.body.id})
  const { id,sem,smark,subject} = req.body
  const obj = {
    id,sem,smark,subject
  }
  student[0].markList.push(obj);
  student[0].save();
  res.json(student)
})

router.post("/tprofile", (req, res) => {
  
  console.log("req.body",req.body)
  Teacher.find({ _id: req.body.id })
  .select("-password")
  .then((admins) => {
    res.json(admins);
  })
  .catch((err) => {
    console.log(err);
  });
  });

  router.put('/tupdatepic',requireLogin,(req,res)=>{
    console.log(req.user)
    Teacher.findByIdAndUpdate(req.user._id,{$set:{pic:req.body.pic}},{new:true},
        (err,result)=>{
         if(err){
             return res.status(422).json({error:"pic canot post"})
         }
         res.json(result)
         console.log(result)
    })
 
})
router.post("/api/teac/teaUpd",async(req,res)=>{
        const {  name,surname,gender, qulification, joining_year,address,email,mobile,teaching_area,userId} = req.body
        const teacher = await Teacher.findOne({_id:userId})
        console.log(teacher)
        teacher.name=name
        teacher.surname=surname
        teacher.gender=gender
        teacher.qulification=qulification
        teacher.joining_year=joining_year
        teacher.address=address
        teacher.email=email
        teacher.mobile=mobile
        teacher.teaching_area=teaching_area

         await teacher.save();

      })


module.exports = router