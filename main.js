const express = require('express')
const app = express()
const port = 3000

// here is request 
// app.get() app.post() app.put() app.delete()

// by default get request work on browser
app.get('/', (req, res) => {
  res.send('Hello World!')
})
// app.get('/about', (req, res) => {
//   res.send('Hello about us!')
// })
// app.get('/contact-us', (req, res) => {
//   res.send('Hello contact us!')
// })
// app.get('/blog', (req, res) => {
//   res.send('Hello blog!')
// })


// here is parameters in express
app.get('/blog/:slug/:second', (req, res) => {    
    res.send(`here is my blog ${req.params.slug} and ${req.params.second}`)
    console.log(`here is my blog ${req.params.slug}`);
    console.log(req);
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})