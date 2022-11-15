const path = require('path') ;
const os = require('os') ;

const pathObj = path.parse(__filename)

console.log(pathObj);
console.log(
   os.freemem(),
os.totalmem(),
os.userInfo(),
os.uptime() 
);

console.log(__filename);
console.log(__dirname);
