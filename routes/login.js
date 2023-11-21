const express = require('express');
// const fetch = require('node-fetch')

let router = express.Router({'caseSensitive':false,
"strict": false})

router.get('/index/:id',(req,res,next)=>{
    res.cookie('_id',req.params.id)
    res.redirect(302,'http://localhost/')
})
router.get('/login',(req,res,next)=>{
    res.redirect(302,'http://localhost/pages/login')
})


module.exports = router