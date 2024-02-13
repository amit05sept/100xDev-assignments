const express = require("express");

const app = express();

let numberOfReqPerUser = {};

// bucket that is getting refreshed every 1 sec.
setInterval(() => {
  numberOfReqPerUser = {};
}, 20*1000);

// rate limit;
function requestCount(req, res, next) {
  // conditions to check for rate limit for specific user.
  const userId = req.headers["user-id"];

  if (numberOfReqPerUser[userId]) {
    if (numberOfReqPerUser[userId] > 5) {
      res.status(429).send("maximum rate limit reached");
      return;
    } else {
      numberOfReqPerUser[userId]++;
      next();
    }
  } else {
    numberOfReqPerUser[userId] = 1;
    next();
  }
}

function isValidAge(req, res, next) {
  // const age = req.body.age //-> this requires express.json();
  //   const age = req.headers.age;
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.status(401).send("error");
  }
}

app.use(express.json());
app.use(requestCount);

app.get("/ride1", isValidAge, (req, res) => {
  res.send("ride one booked !!!");
});

app.listen(3000);
