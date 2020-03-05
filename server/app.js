// Enviroment variables
require('dotenv').config()

// Database connection
require('./configs/mongoose.config')

// Application instance
const express = require('express')
const app = express()

// Configs
require('./configs/middleware.config')(app)
require('./configs/locals.config')(app)
require('./configs/session.config')(app)


// Base URLS
app.use('/api', require('./routes/auth.routes'))
app.use('/api', require('./routes/spotify.routes'))

//Heroku deploy

app.use((req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
})


module.exports = app