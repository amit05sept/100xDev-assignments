const express = require("express");
const app = express();

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

app.get(
  "/health-checkup",
  userMiddleware,
  kidneyMiddleware,
  (req, res) => {
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
    res.json({
      msg: "hola!!! everything is correct",
    });
  }
);

app.post(
  "/health-checkup",
  userMiddleware,
  (req, res) => {
    res.json({
      msg: "hi ther post",
    });
  }
);

app.listen(3000);
