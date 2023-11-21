const path = require('path')
const express = require('express')
const ejs = require('ejs');
const app= express();
const cookieParser = require('cookie-parser')
const loginRouter = require('./routes/login')
const profileRouter = require('./routes/profile-routes')
const axios = require('axios');
const { error } = require('console');

let skills;

app.set('view engine', 'ejs')
// app.set('', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'views')));

app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/user',loginRouter);
app.use('/profile',profileRouter);

app.get('/', (req, res, next)=>{
    console.log(req.cookies)
    if(req.cookies._id){
        const id = req.cookies['_id']
        axios.get(`http://localhost:4000/profile/findOne/${id}`).then((response)=>{
            console.log('Response', response.data)
            res.render('pages/index',{data: response.data})
        }).catch((err)=>{
            console.log('Err', err)
            res.redirect('pages/login')
        })
    }else{
        res.redirect('pages/login')
    }
})

axios.get('http://localhost:4000/skills')
.then((res)=>{
    // console.log(res.data)
    skills=res.data
    console.log(skills)
    
})
.catch((err)=>{console.log(error)})
//Assuming one has access to the index page...ie has logged in
app.get('/pages/index', function(req, res, next){   
    //must be accessed after login, hence cookies needed

    res.render('pages/index', {skills:skills})
    
})

app.get('/pages/profile', function(req, res){
    res.render('pages/profile', {skills:skills});
})

// app.get('/pages/dashboard', function(req, res){
//     res.render('pages/dashboard')
// })

app.get('/pages/profile', function(req, res){
    res.render('pages/profile')
})

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

