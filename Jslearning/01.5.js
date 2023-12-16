// const fs = require("fs");

// const filePath ="file.txt";

// reading the file
// this is a asynchronous task.
// fs.readFile(filePath , 'utf8',(err , data)=>{
//     if(err){
//         console.error(`Error while reading the file : `,err);
//         return;
//     }

//     console.log(`File content : ${data}`);
// });

// prints first as above is asnyc operation written.
// console.log("hello bhaiya " +__dirname);

// writing inside a file.

// const contentToWrite = " i am writing this specific line from Js file. ";

// this will erase all the data from the file
// and then write the file

// fs.writeFile(filePath , contentToWrite , 'utf8' , (err)=>{
//     if(err){
//         console.error(`Error while writng the file : ${err}`);
//     }else{
//         console.log(`File has been written successfully!!`);
//     }
// });

// const contentToWrite2 = " --  -- this is going to be appended into the file -- -- ";
// // this will append data into the file
// fs.appendFile(filePath , contentToWrite2 , 'utf8' , (err)=>{
//     if(err){
//         console.error(`Error while writng the file : ${err}`);
//     }else{
//         console.log(`File has been written successfully!!`);
//     }
// });

//----------- reading a json object.
// const filePath = "obj.json";
// fs.readFile(filePath, "utf8", (err, data) => {
//   if (err) {
//     console.error(`Error while reading the file : `, err);
//     return;
//   }

//   try {
//     const jsonObject = JSON.parse(data);
//     console.log(jsonObject);
//   } catch (err) {
//     console.error("err is : ", err);
//   }
// });

// --------------------------------------------------------

// reading a file using async / await
// const fs = require("fs").promises;

// async function readTheFile(){
//     try{
//         const filePath = "obj.json";
//         const data = await fs.readFile(filePath,'utf8');
//         const Obj = JSON.parse(data);
//         console.log(Obj);
//     }catch(err){
//         console.error(`Error is : `, err);
//     }
// }
// readTheFile();

// --------------------------------------------------------


// const fs = require("fs");

// function readTheFile(){
//     return new Promise(())
// }