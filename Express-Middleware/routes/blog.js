const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('this is blog page bro ')
})

router.get('/:slug', (req, res) => {
    res.send(`this is blog inner page ${req.params.slug}`)
})

module.exports = router