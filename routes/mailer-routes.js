const express = require('express');
const axios = require('axios')
// const fetch = require('node-fetch')

let router = express.Router({'caseSensitive':false,
"strict": false})

router.post('/connect',(req,res,next)=>{

const {sender} = req.body
const recipient = req.cookies._id

const postbody ={sender,recipient}

console.log(postbody)

axios.post('http://localhost:4000/mailer/', postbody).then((response)=>{
    console.log('Response', response.data)
    res.send({data:response.data})
}).catch((err)=>{
    console.log('Err', err)
    res.send({data:err})

})

})


module.exports = router