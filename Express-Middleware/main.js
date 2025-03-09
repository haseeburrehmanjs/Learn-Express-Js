const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs = require('fs')

app.use((req, res, next) => {
    console.log('middleware one');
    fs.appendFileSync('loggedin.txt', `user logged in time ===> ${Date.now()} ===> this is ${req.method} request\n`)
    console.log(`user logged in time ===> ${Date.now()} ===> this is ${req.method} request`)
    next()
})

app.use('/blog', blog)

app.get('/', (req, res) => {
    res.send('here is my home page!')
})

app.get('/about-us', (req, res) => {
    res.send('this is about us page')
})

app.listen(port, () => {
    console.log(`express app runing on port ${port}`)
})