const fs = require("fs");
const https = require("https");
const express = require("express");
const helmet = require("helmet");

const app = express();

app.use(helmet());

const PORT = process.env.PORT || 8080;

app.get("/secret", (req, res) => {
  res.send("Your Secret Number : 420");
});

const httpsOptions = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};
https.createServer(httpsOptions, app).listen(PORT, () => {
  console.log(`Listening at port: ${PORT}`);
});
