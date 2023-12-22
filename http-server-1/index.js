// const express = require('express')
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//     // console.log("request reached");
//   res.send('<b>Hello World <b>')
// })

// app.get("/about",(req,res)=>{
//   res.send('About');
// });

// app.post('/',(req,res)=>{
//   const query = req.query;
//   console.log(query);
//     res.send('<b>Hello World <b>');
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// --------------------------------------------------------------

// const express = require("express");
// const app = express();
// const port = 3000;

// const calculate = function (n) {
//   const sum = (n * (n + 1)) / 2;
//   return sum;
// };

// app.get("/", (req, res) => {
//   res.send("hello");
// });
// app.get("/sum", (req, res) => {
//   // const n = req.query.n;
//   const n = parseInt(req.query.n);

//   res.send(`${calculate(n)}`);
// });

// app.listen(port, () => {});

// ------------------------------------------------------------
// this is kidneys https server
/*
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let users = [
  {
    firstName: "amit",
    kindneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];

app.get("/", (req, res) => {
  const johnKidneys = users[0].kindneys;
  const noOfKidneys = johnKidneys.length;
  const noOfHealthyKidneys = johnKidneys.filter(
    (kidney) => kidney.healthy
  ).length;

  const noOfUnHealthyKidneys = noOfKidneys - noOfHealthyKidneys;
  //  console.log(johnKidneys);

  res.json({
    noOfKidneys,
    noOfHealthyKidneys,
    noOfUnHealthyKidneys,
  });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kindneys.push({
    healthy: isHealthy,
  });

  res.json({
    msg: "done",
  });
});

app.put("/", (req, res) => {
  users[0].kindneys.forEach((kidney) => {
    kidney.healthy = true;
  });

  res.json({
    msg: "done",
  });
});

app.delete("/", (req, res) => {
  users[0].kindneys = users[0].kindneys.filter((kidney) => 
    kidney.healthy
  );

  res.json({
    msg: "done",
  });
});

app.listen(port);


*/

// -------------------------------------------------------------
// reading the files
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

const port = 3000;

app.get("/files",(req, res) => {
  // Specify the path to the directory you want to list files for
  const directoryPath = "./files";
  let filesNames = [];
    try {
      const files =  fs.readdirSync(directoryPath);
      // Log the list of file names
      files.forEach((file) => {
        filesNames.push(file);
      });
    } catch (err) {
      res.sendStatus(404).json({
        error: err
      });
    }
  res.json(filesNames);
});

app.listen(port);
