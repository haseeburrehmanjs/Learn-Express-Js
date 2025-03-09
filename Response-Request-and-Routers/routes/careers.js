const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('here is careers page!')
})

router.get('/:slug', (req, res) => {
    res.send(`this is career page and here is my slug name ===> ${req.params.slug}`)
})


module.exports = router