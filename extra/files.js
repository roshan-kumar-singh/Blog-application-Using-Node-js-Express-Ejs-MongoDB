const fs=require('fs');
//reading files
// fs.readFile('./docs/blog1.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });
// console.log('last line');


//writing files

// fs.writeFile('./docs/blog1.txt','hello roshan its node js here',()=>{
//     console.log('file was written');
// });
// fs.writeFile('./docs/blog2.txt','hello roshan its node js here, again',()=>{
//     console.log('file was written');
// });
//directories 
if(fs.existsSync('./assets')){
    fs.mkdir('./assets',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder created');
    });
}else {
    fs.rmdir('./assets',(err)=>{
        if(err){
            console.log('folder deleted');
        }
    });
}

//deleting file
if(fs.existsSync('./docs/deletme.txt')){
    fs.unlink('./docs/deletme.txt',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    });
}
