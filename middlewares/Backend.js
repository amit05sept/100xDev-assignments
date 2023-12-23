const express = require("express");
const app = express();

app.get("/api/name", (req, res) => {
  res.json({
    name: `Amit kumar Pandey`,
  });
});

app.listen(3000);
