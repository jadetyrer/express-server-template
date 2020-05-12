const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const port = process.env.port || 3000;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Your server is running") 
})

app.listen(port, () => console.log(`Listening on port ${port}`))

