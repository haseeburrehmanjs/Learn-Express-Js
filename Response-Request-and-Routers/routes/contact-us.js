const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send('here is contact us page broo')
})

router.get('/:slug', (req, res) => {
    res.send(`here is contact us page slug ===> ${req.params.slug}`)
})

module.exports = router