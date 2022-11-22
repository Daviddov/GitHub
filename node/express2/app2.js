const express = require('express');
const app = express();


app.all('/', (req, res, next) => {
    console.log('hello');
    next()
})

app.get('/user/:a', (req, res) => {
    res.send(req.params)
})

app.use('/static', express.static('public'))

app.listen('3000')