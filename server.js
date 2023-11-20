const path = require('path')
const express = require('express')
const ejs = require('ejs');
const app= express();
const cookieParser = require('cookie-parser')
const loginRouter = require('./routes/login')
const profileRouter = require('./routes/profile-routes')

// let  skillsArr = {'JAVA':{price:'10', date:''}, 'C++':{}, 'C#', 'C', 'LARAVEL', 
// 'JAVASCRIPT', 'NODE JS', 'REACT JS', 'ANGULAR','PYTHON', 'PHP', 
// 'PERL', 'RUST', 'SCALA', 'HTML', 'CSS', 'SQL', 'NoSQL',
//         'TypeScript', 'MATLAB'
// }

app.set('view engine', 'ejs')
// app.set('', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'views')));

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())

app.use('/user',loginRouter);
app.use('/profile',profileRouter);

app.get('/', (req, res, next)=>{
    res.redirect('pages/login')
})
//Assuming one has access to the index page...ie has logged in
app.get('/pages/index', function(req, res, next){
    //must be accessed after login, hence cookies needed
    res.render('pages/index')
})

app.get('/pages/profile', function(req, res){
    res.render('pages/profile');
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

// app.get('/pages/tables', function(req, res){
//     res.render('pages/tables')
// })

// app.get('/pages/rtl', function(req, res){
//     res.render('pages/rtl')
// })

app.listen(80, function(req, res, next){
    console.log('Server running on port 80');
})

