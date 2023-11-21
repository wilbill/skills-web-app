const express = require('express');
const axios = require('axios')
// const fetch = require('node-fetch')

let router = express.Router({'caseSensitive':false,
"strict": false})

router.post('/create',(req,res,next)=>{
    let skillarr = []
    const {description, school,_id,skills,mobile} = req.body

    if(!Array.isArray(skills)){
        skillarr.push(skills)
    }else{

        skillarr = skills
    }

    let postbody = {description,school,userId: req.cookies._id,skills: skillarr,mobile}

    console.log("cookies",req.cookies._id)

    axios.post('http://localhost:4000/profile/create', postbody).then((response)=>{
        console.log('Response', response.data)
    }).catch((err)=>{
        console.log('Err', err)

    })
    res.render('http://localhost/pages/profile',{profile:response.data})
    })

    


    router.get('/',(req,res,next)=>{
        res.redirect(302,'http://localhost/pages/login')
    })


module.exports = router