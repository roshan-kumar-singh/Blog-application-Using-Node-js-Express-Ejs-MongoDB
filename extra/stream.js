const fs=require('fs');
const readStream=fs.createReadStream('./docs/blog1.txt',{encoding: 'utf8'});
const writeStream=fs.createWriteStream('./docs/blog3.txt');

// readStream.on('data',(chunk) =>{
//     console.log('-----------New chunk-------------');
//     console.log(chunk);
//     writeStream.write('\nchunk\n');
//     writeStream.write(chunk);
// })
readStream.pipe(writeStream);