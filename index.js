// importing express framework
const express = require("express");

const app = express();

// Respond with "H E L L O  W O R L D!" for requests that hit our root "/"
app.get("/", function (req, res) {
 return res.send("Hello World, time to start deing");
});

// listen to port 7000 by default
app.listen(process.env.PORT || 7000, () => {
  console.log("Server is running");
});

module.exports = app;
