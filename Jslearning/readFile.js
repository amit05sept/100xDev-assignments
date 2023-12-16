const fs = require('fs').promises;

function fun(){
    let fileData;
    const path ='./files/a.txt';
    fs.readFile(path,'utf-8',(err , data)=>{
        if(err){
            throw new Error('error line 7 me ', err);
        }

        fileData = data;
        return data;
    });
}


console.log(fun());