const express = require('express');
const axios = require('axios')
// const fetch = require('node-fetch')

let router = express.Router({'caseSensitive':false,
"strict": false})

router.get('/:skill',(req,res,next)=>{
    let skillarr = []
    const skill = req.params.skill

   

    axios.get(`http://localhost:4000/profile/findWithSkill/${skill}`).then((response)=>{
        console.log('Response', response.data)
        res.render('pages/skillProfile',{data:response.data,profiles:undefined})
    }).catch((err)=>{
        console.log('Err', err)
        res.redirect('http://localhost/')

    })
    
})




router.get('/',(req,res,next)=>{
        axios.get(`http://localhost:4000/profile/all`).then((response)=>{
            console.log('Response', response.data)
            res.render('pages/skillProfile',{profiles:response.data,data:undefined})
        }).catch((err)=>{
            console.log('Err', err)
            res.redirect('http://localhost/')
        
        })
        
    })



module.exports = router