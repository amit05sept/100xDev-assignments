const fs = require("fs").promises;
// async function fun() {
//   try {
//     const path = "./files/a.txt";
//     await fs.readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         throw new Error(`line 7 - error is : ${err} - `);
//       }
//       console.log("hello bhaiya line 9 pr hunn data ",data);
//       return data;
//     });
//   } catch (err) {
//     throw new Error("- error in line 12 - ", err);
//   }
// }
function fun() {
  const path = "./files/a.txt";
  let fileData;
  // i want wait here
  // fs.readFile(path, "utf-8", (err, data) => {
  //     console.log(data);
  //     fileData=data;
  // });

  fs.readFile(path,'utf-8')
    .then((data) => {
      console.log("File data: line 27", data);
    fileData=data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });


  console.log("line 25", fileData);
  return fileData;
}

async function files() {
  try {
    const data = await fun(); // line js
    console.log("hello bhaiya ye rha data line 20", data);
  } catch (err) {
    console.log(`error aagaya line 21 pr `, err);
  }
}

files();
