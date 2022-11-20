const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
    const { url } = req;
    const urlSplit = url.split('/')
    if (urlSplit) {
        switch (urlSplit[1]) {
            case 'pages':
                switch (urlSplit[2]) {
                    case 'sports':
                        fs.readFile('./files/sports.html', function (err, data) {
                            res.writeHead(200, { 'Content-Type': 'text/html' });
                            res.write(data);
                            return res.end();
                        });
                        break;
                    case 'about':
                        fs.readFile('./files/about.html', function (err, data) {
                            res.writeHead(200, { 'Content-Type': 'text/html' });
                            res.write(data);
                            return res.end();
                        });
                        break;
                        fs.readFile('./files/pages.html', function (err, data) {
                            res.writeHead(200, { 'Content-Type': 'text/html' });
                            res.write(data);
                            return res.end();
                        });
                    default:
                        break;
                }
                break;

            case 'files':
                switch (urlSplit[2]) {
                    case 'shops':
                        fs.readFile('./files/shops.txt', function (err, data) {
                            res.writeHead(200, { 'Content-Type': 'text/txt' });
                            res.write(data);
                            return res.end();
                        });
                        break;
                    case 'people':
                        fs.readFile('./files/people.txt', function (err, data) {
                            res.writeHead(200, { 'Content-Type': 'text/txt' });
                            res.write(data);
                            return res.end();
                        });
                        break;
                    default:
                        fs.readFile('./files/files.html', function (err, data) {
                            res.writeHead(200, { 'Content-Type': 'text/html' });
                            res.write(data);
                            return res.end();
                        });
                        break;
                }
                break;

            case '/contacts':
                fs.readFile('./files/contacts.json', function (err, data) {
                    res.writeHead(200, { 'Content-Type': 'text/json' });
                    res.write(data);
                    return res.end();
                });
                break;

            case '/contacts/2':
                fs.readFile('./files/contacts.json', function (err, data) {
                    res.writeHead(200, { 'Content-Type': 'text/json' });
                    res.write(data);
                    return res.end();
                });
                break;
            default:
                console.log(url, urlSplit);
                break;
        }

    }

})

server.listen(3000)