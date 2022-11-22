const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log('birds')
    next()
})
    router.get('/birds', (req, res) => {
        res.render('birds come')
    })
    router.get('/about', (req, res) => {
        res.send('about birds')
    })

    module.exports = router
