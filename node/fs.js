const fs = require('fs');

// const fsp = require('fs').promises()

// console.log(fs.readdirSync('./'));
// console.log(fs.readdir('./', (err, file)=> {
// if (err) {console.log('rerror', err);   
// }console.log('result', file);
// }
// ));

// console.log(fs.readFile('hello.js', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }))
fs.appendFile('../react/message.txt', 'data to append', (err) => {
    if (err) {throw err;
    console.log(err);}
  });

//   console.log(fs.open('message.txt', 'w', (err) => {
//     if (err) throw err;
//     console.log('The "data to create" ');
//   }));

// fs.writeFile('mynewfile3.txt', 'Hello content!!!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });

// fs.unlink('mynewfile3.txt', function (err) {
//     if (err) throw err;
//     console.log('File deleted!');
//   });

//   fs.rename('message.txt', 'myrenamedfile.txt', function (err) {
//     if (err) throw err;
//     console.log('File Renamed!');
//   });

// console.log(fs.appendFile);