const express = require('express');
const app = express();
const http = require('http');

const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//handlebars setting
app.set("view engine", "hbs");
app.engine('hbs', exphbs({
    extname: 'hbs', 
    defaultLayout: 'index',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
}));


const port = 1770;
app.listen(port);
console.log(`Listening to server: http://localhost:${port}`);

//landing page

app.get('/main', (req,res)=>{
    res.render("main",{message: 'Hi! WE ARE CURRENTLY WORKING ON THIS PAGE. PLEASE COME BACK SOON!'});
})

app.get('/about', (req,res)=>{
    res.render("about",{message: 'Hi! WE ARE CURRENTLY WORKING ON THIS PAGE. PLEASE COME BACK SOON!'});
})
app.get('/forum-wall', (req,res)=>{
    res.render("forum-wall",{message: 'Hi! WE ARE CURRENTLY WORKING ON THIS PAGE. PLEASE COME BACK SOON!'});
})

app.get('/forum-post', (req,res)=>{
    res.render("forum-post",{message: 'Hi! WE ARE CURRENTLY WORKING ON THIS PAGE. PLEASE COME BACK SOON!'});
})

app.get('/profile', (req,res)=>{
    res.render("profile",{message: 'Hi! WE ARE CURRENTLY WORKING ON THIS PAGE. PLEASE COME BACK SOON!'});
})

app.get('/dashboard', (req,res)=>{
    res.render("dashboard",{message: 'Hi! WE ARE CURRENTLY WORKING ON THIS PAGE. PLEASE COME BACK SOON!'});
})


app.get('*', (req,res)=>{
    res.render("notfound",{message: 'hi, there!'});
})
