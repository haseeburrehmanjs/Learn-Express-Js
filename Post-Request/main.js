import express from 'express'
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello, i am home page!')
})

app.post('/login', (req, res) => {
    console.log(req.body)
    res.send({
        status: 200,
        message : 'user login succesfully',
        data : req.body
    })
})

app.listen(port, ()=> {
    console.log('express app run on port 3000');
})