const express = require("express");
const app = express();
const port = 8080;

app.get("/api", (req, res) => {
  const employe = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    age: 30
  };
  res.json(employe);
});

app.listen(port, () => {
  console.log(`Your port number is ${port}`);
});
