const express = require("express");
const zod = require("zod");
const app = express();

const shcema = zod.array(zod.number());

app.use(express.json());

function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;

  // early return
  if (!(username === "gladiatorPandey" && password === "2glad000")) {
    res.status(400).json({
      msg: "user info is wrong",
    });
    return;
  }

  next();
}
let numberOfRequests = 0;
function countRequests(req, res, next) {
  numberOfRequests++;
  console.log(numberOfRequests);
  next();
}

function kidneyMiddleware(req, res, next) {
  const kidneyId = +req.query.kidneyId;
  // early return
  if (!(kidneyId === 1 || kidneyId === 2)) {
    res.status(400).json({
      msg: "wrong input",
    });
    return;
  }
  next();
}

app.use(countRequests);

app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
  /*
  // ------ boring way to do checks
  // ------  better way is middleware
  const kidneyId = +req.query.kidneyId;
  const username = req.headers.username;
  const password = req.headers.password;
  if (!(username === "gladiatorPandey" && password === "2glad000")) {
    res.status(400).json({
      msg: "user info is wrong",
    });
    return;
  }
  if (!(kidneyId === 1 || kidneyId === 2)) {
    res.status(400).json({
      msg: "wrong input",
    });
    return;
  }
*/
  // this was just to see that i can access body from get also and not only from "post".
  // const funNumber = req.body.funNumber;
  // console.log(funNumber);
  res.json({
    msg: "hola!!! everything is correct",
  });
});

app.post("/health-checkup", userMiddleware, (req, res) => {
  // there will be any error it will be catched up by global catches.
  // throw new Error("hogaya re hogaya tera to kam re");
  // return;

  // Zod helps to validate the input
  // here kidney must be an array of numbers
  const kidneys = req.body.kidneys;
  const response = shcema.safeParse(kidneys);
  if (!response.success) {
    res.status(411).send(`not valid input`);
    return;
  }
  res.send(`you have ${kidneys.length} kidneys`);
  // res.json({
  //   msg: "hi ther post",
  // });
});

// global catches , error catch handler
app.use((err, req, res, next) => {
  // this is the place where we can add something like , errorCount++,
  // write into DB or file what kind of errors we are getting ,
  // as a developer it will help use.
  res.status(500).json({
    msg: `something is up `,
    error: `${err}`,
  });
});
app.listen(3000);
