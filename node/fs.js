const fs = require('fs');

const fsp = require('fs').promises()

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

// console.log(fs.appendFile('message.txt', 'data to append', (err) => {
//     if (err) throw err;
//     console.log('The "data to append" was appended to file!');
//   }));

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

console.log(fsp.appendFile);