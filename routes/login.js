const express = require('express');
// const fetch = require('node-fetch')

let router = express.Router({'caseSensitive':false,
"strict": false})

router.get('/login',(req,res,next)=>{
    res.redirect(302,'http://localhost/pages/index')
})


module.exports = router