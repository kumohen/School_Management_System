const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Report = mongoose.model("Report")


router.get('/allreport',(req,res)=>{
    Report.find()
   
  
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/addReport',(req,res)=>{
    const {title,body} = req.body 

    if(!title || !body){
      return  res.status(422).json({error:"Plase add all the fields"})
    }
     const post = new Report({title,body})
    post.save().then(result=>{
        res.json(result)
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports = router