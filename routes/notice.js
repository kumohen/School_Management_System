const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Notice = mongoose.model("Notice")
const Club = mongoose.model('Club')
const Issue = mongoose.model('Issue')
const Report = mongoose.model('Report')
const Subject = mongoose.model('Subject')

router.get('/allnotice',(req,res)=>{
    Notice.find()
   
  
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/addnotice',(req,res)=>{
    const {title,content} = req.body 
    console.log(req.body)
    if(!title || !content){
      return  res.status(422).json({error:"Plase add all the fields"})
    }
     const post = new Notice({title,content})
    post.save().then(result=>{
        res.json(result)
    })
    .catch(err=>{
        console.log(err)
    })
})
router.post('/addreport',(req,res)=>{
    const {title,body,postedBy} = req.body 
   
    if(!title || !body){
      return  res.status(422).json({error:"Plase add all the fields"})
    }
     const post = new Report({title,body,postedBy})
    post.save().then(result=>{
        res.json(result)
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/addSub',(req,res)=>{
    const {sub_name,sub_code,sub_class,sub_credit,sub_type} = req.body 
   
   
     const post = new Subject({sub_name,sub_code,sub_class,sub_credit,sub_type})
    post.save().then(result=>{
        res.json(result)
    })
    .catch(err=>{
        console.log(err)
    })
})
router.get('/allSub',(req,res)=>{
    Subject.find()
   
  
    .then(posts=>{
        res.json(posts)
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/allreport',(req,res)=>{
    Report.find()
   
  
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/addclub',(req,res)=>{
    const {name,description} = req.body 
 
    if(!name || !description){
      return  res.status(422).json({error:"Plase add all the fields"})
    }
     const post = new Club({name,description})
    post.save().then(result=>{
        res.json(result)
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/allclub',(req,res)=>{
    Club.find()
   
  
    .then(posts=>{
        res.json(posts)
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/allissue',(req,res)=>{
    Issue.find()
   
  
    .then(posts=>{
        res.json(posts)
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/joinclub',async(req,res)=>{
    const {userId,cuser,clubId,clubName} = req.body
   
    const club = await Club.findOne({_id:clubId});
     club.members.push(userId);
     await club.save();

    const issue = new Issue({clubId,userId,stuDetail:cuser,clubName})
    await issue.save();
    
    // const memdata = {userId,userName,userClass,pending:true}
    // club.members.push(memdata);
    //  await club.save()
})

router.post('/acjoinclub',  async(req,res)=>{
     const {id} = req.body 
   
     const issue = await Issue.findOne({_id:id})
      issue.isIssue = true ;
      await issue.save();
})


module.exports = router