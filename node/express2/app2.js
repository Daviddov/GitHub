const express = require('express');
const birds = require('./birds');
const app = express();

app.use('/birds', birds);

app.all('/', (req, res, next) => {
    console.log('hello');
    next()
})

app.get('/user/:a', (req, res) => {
    res.send(req.params)
})

app.use('/static', express.static('public'))

app.listen('3000')