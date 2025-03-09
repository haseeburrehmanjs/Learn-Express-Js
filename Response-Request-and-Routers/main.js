const express = require('express')
const app = express()
const port = 3000

const blog = require('./routes/blog')
const careers = require('./routes/careers')

app.use('/birds', blog)
app.use('/careers', careers)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about-us', (req, res) => {
    console.log('thanks for come on about us page!')
    res.send('thanks for come on about us page')
})

app.get('/contact-us', (req,res) => {
    res.send('thanks for come on contact us page')
    console.log('thanks for come on contact us page!')
})

app.get('/blog', (req, res) => {
    res.send('this is blog page broo')
})
app.get('/api', (req, res) => {
    res.send({
      a: 1,
      b : 2, 
      c : 3,
      d: 4,
      name : [
        'haseeb',
        'ur',
        'rehman'
      ]
    })
})

app.get('/blog/:slug', (req, res) => {
    res.send(`this is blog page and i am ${req.params.slug}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})