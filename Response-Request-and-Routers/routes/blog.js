// const express = require('express')
// const router = express.Router()

// // define the home page route
// router.get('/', (req, res) => {
//   res.send('Birds home page')
// })
// // define the about route
// router.get('/about', (req, res) => {
//   res.send('About birds')
// })

// module.exports = router


const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('haseeb here')
})

module.exports = router