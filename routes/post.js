const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");
const requireLogin  = require('../middleware/requireLogin')
const Post =  mongoose.model("Post")

const transporter = nodemailer.createTransport(
    sendGridTransport({
      auth: {
        api_key: "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",
      },
    })
  );
  
router.get('/allpost',(req,res)=>{
    Post.find()
   
  
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/posts',(req,res)=>{
    Post.find()
    
  
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>{
        console.log(err)
    })
})



router.post('/createpost',(req,res)=>{
    const {title,pic} = req.body 
    if(!title ){
      return  res.status(422).json({error:"Plase add all the fields"})
    }
    // req.user.password = undefined
    const post = new Post({
        title,
    
        photo:pic,
        postedBy:"admin"
    })
    post.save().then(result=>{
        res.json({post:result})
    })
    .catch(err=>{
        console.log(err)
    })
})



router.put('/vote',requireLogin,(req,res)=>{
   
    const {postId,userId} = req.body
    
    Post.findByIdAndUpdate(postId,{
        $push:{votes:userId}
    },{
        new:true
    }).exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            transporter.sendMail({
                to: "makskks@gmail.com",
                from: "mahenmondal111@gmail.com",
                subject: "E-voting ", 
                html: `
                <h3>,You has given your vote successfully to ${result.title}  </h3>
                `,
              });
            
            res.json(result)
        }
    })
})








module.exports = router