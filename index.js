const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const port = 8000

//Adding HBS
const hbsPath = path.join(__dirname , '/templates/views')
app.set('view engine' , 'hbs')
app.set('views' , hbsPath)

//Adding partials
const partialsPath = path.join(__dirname, '/templates/partials');
hbs.registerPartials(partialsPath);

//Adding static website 
const staticPath = path.join(__dirname , '/public')
app.use(express.static(staticPath))

//Routing
app.get( '/', (req,res) => {
    res.render('index')
})

app.get( '/about', (req,res) => {
   res.render('about')
})

app.get( '/weather', (req,res) => {
    res.render('weather')
})

app.get( '*', (req,res) => {
    res.render("404" , {
        errMsg : "Page not found"
    })
})

app.listen(port , () => {
    console.log(`Server listening at ${port}`)
})