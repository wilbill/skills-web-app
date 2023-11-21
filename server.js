const path = require('path')
const express = require('express')
const ejsServer = require('ejs');
const app= express();
const cookieParser = require('cookie-parser')
const loginRouter = require('./routes/login')
const profileRouter = require('./routes/profile-routes')
const axios = require('axios');
const {getSkills,dateNow,getProfiles} = require('./utils/utility')



app.set('view engine', 'ejs')
app.engine('ejs', ejsServer.renderFile)
// app.set('', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'views')));

app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/user',loginRouter);
app.use('/profile',profileRouter);

app.get('/', async (req, res, next)=>{


    let skills = await getSkills()
    let profiles = await getProfiles()

    console.log("sk: ",skills)
    console.log(req.cookies)
    if(req.cookies._id){
        const id = req.cookies['_id']
        axios.get(`http://localhost:4000/profile/findOne/${id}`).then((response)=>{
            console.log('Response', response.data)
            res.render('pages/index',{data: response.data, skills: skills,dateFunc:dateNow(),profiles:profiles})
        }).catch((err)=>{

            console.log('Err', err)
            res.redirect('pages/login')
        })
    }else{
        res.redirect('pages/login')
    }
})

//Assuming one has access to the index page...ie has logged in
// app.get('/pages/index', function(req, res, next){   
//     //must be accessed after login, hence cookies needed
//     let skills = getSkills()
//     res.render('pages/index', {skills:skills})
    
// })

app.get('/pages/profile', async function(req, res){
    let skills =await getSkills()
    console.log(skills)
    if(req.cookies._id){
        const id = req.cookies['_id']
        axios.get(`http://localhost:4000/profile/findOne/${id}`).then((response)=>{
            console.log('Response', response.data)
            res.render('pages/profile',{data: response.data, skills: skills})
        }).catch((err)=>{

            console.log('Err', err)
            res.render('pages/profile',{skills: skills})
        })
    }else{
        res.red('pages/login')
    }
   
})

// app.get('/pages/dashboard', function(req, res){
//     res.render('pages/dashboard')
// })

// app.get('/pages/profile', function(req, res){
//     res.render('pages/profile')
// })

app.get('/pages/sign-in', function(req, res){
    res.render('pages/sign-in')
})

app.get('/pages/sign-up', function(req, res){
    res.render('pages/sign-up')
})
app.get('/pages/login', function(req, res){
    res.render('pages/login')
})

// app.get('/pages/tables', function(req, res){
//     res.render('pages/tables')
// })

// app.get('/pages/rtl', function(req, res){
//     res.render('pages/rtl')
// })

app.listen(80, function(req, res, next){
    console.log('Server running on port 80');
})

