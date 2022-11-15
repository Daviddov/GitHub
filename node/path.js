import { parse } from 'path';
import { freemem, totalmem, userInfo, uptime } from 'os';

const pathObj = parse(__filename)

console.log(pathObj);
console.log(
   freemem(),
    totalmem(),
userInfo(),
uptime() 
);

console.log(__filename);
console.log(__dirname);
