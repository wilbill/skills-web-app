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
    }
    skillarr = [...skills]

    let postbody = {description,school,_id,skillarr,mobile}

    axios.post('http://localhost:4000/profile/create', postbody).then((response)=>{
        console.log('Response', response)
    }).catch((err)=>{
        console.log('Err', err)

    })
    res.redirect(302,'http://localhost/pages/profile')
})
router.get('/login',(req,res,next)=>{
    res.redirect(302,'http://localhost/pages/login')
})


module.exports = router