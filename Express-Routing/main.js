const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000
const blog = require('./routes/blog/blog')

app.use(express.static('public'))

// middleware one here just for examplre
// middleware for logger
app.use((req, res, next) => {
    console.log(req.headers)
    req.haseeb = 'haseeb ur rehman js '
    fs.appendFileSync('loginDetails.txt', `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`);
    // res.send(`user logged in ${Date.now()}`)
    next()
})

// middleware two here just for examplre
app.use((req, res, next) => {
    console.log('middleware two');
    req.haseeb = 'muhammad rohan'
    next()
})

app.use('/blog', blog)

app.get('/', (req, res) => {
    res.send('hello world')
})
app.get('/contact-us', (req, res) => {
    res.send(`hello about ${req.haseeb}`)
})

app.listen(port, () => {
    console.log(`express app runing on ${port} port!`)
})


