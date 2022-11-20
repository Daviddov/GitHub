const express = require('express');

const app = express()

app.use((req, res, next) => {
  let body = '';
  req.on('end', () => {
    const userName = body.split('=')[1];
    if (userName){
        req.body = {name: userName};
    }
    next();
  });
  req.on('data', chank => {
    body += chank;
  })
});
app.use((req, res, next) => {
    if (req.body) {
        return res.send('<h1>' + req.body.name + '</h1>');
    }
    res.send('<form method="POST"><input type="text" name="username"><button type="submit">Create User</button>')
   
});

app.listen(5000)

// app.get()
// app.post()
// app.put()
// app.delete()