// import express from 'express'
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('this is blog page')
})

router.get('/:slug', (req, res) => {
    res.send(`this is home page but this is my slug ${req.params.slug}`)
})

module.exports = router
