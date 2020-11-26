var crypto = require('crypto');

var buffer = crypto.randomBytes(4);
console.log("buffer : ",buffer);

var bufferhex=buffer.toString('hex')
console.log("buffer string : ",bufferhex);

var buffersubstr = bufferhex.substr(2,4);

console.log("buffer hex substr : ",buffersubstr);