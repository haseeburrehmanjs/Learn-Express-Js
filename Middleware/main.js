import express from 'express'

const app = express()
const port = 3000

const myToken = '12345'
const checkToken = (req, res, next) => {
    if (req.query.token == "" || req.query.token == undefined) {
        return res.send({
            status: 400,
            message: 'check token'
        })
    }
    if (req.query.token != myToken) {
        return res.send({
            status: 400,
            message: 'Enter Correct Token'
        })
    }
    next()
}

const myPassword = '12345'
const checkPassword = (req, res, next) => {
    if(req.query.pass == "" || req.query.pass == undefined){
        return res.send({
            status : 404,
            message : 'check password'
        })
    }
    if (req.query.pass != myPassword) {
        return res.send({
            status: 400,
            message: 'Enter Correct Token'
        })
    }
    next()
}

// middleware
app.use(express.json())
app.use(checkToken)
app.use(checkPassword)

app.post('/login', (req, res) => {
    res.status(200).json({
        message: 'user login succesfully',
        queryData: req.query
    })
})

app.listen(port, () => {
    console.log('express app run on port 3000')
})