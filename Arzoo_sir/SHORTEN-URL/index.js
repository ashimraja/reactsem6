const express = require("express");
const url = require("url");
const fs = require("fs");
const app = express();
const port = 3001;
var file = "data.json";
function loadData() {
  var data = fs.readFileSync(file);
  if (data) data = JSON.parse(data);
  else {
  }
  console.log(data);
  return data;
}

function saveData(data) {
  fs.writeFileSync(file, JSON.stringify(data));
}
// saveData({ 123456: "http://a.com" });
// loadData();
//root endpoint to validate url
app.get("/", (req, res) => {
  var parsedUrl = url.parse(req.query.data);
  console.log(parsedUrl);
  if (!parsedUrl.protocol || !parsedUrl.hostname) res.send("Invalid url");
  else {
    var data = loadData();
    var shortcode = Math.floor(Math.random() * 999999);
    console.log(shortcode);
    data[shortcode] = parsedUrl.href;
    console.log(data);
    saveData(data);

    res.send("code is " + shortcode);
  }
});
app.get("/:code", (req, res) => {
  var code = req.params.code;
  var data = loadData();
  var url = data[code];
  console.log(url);
  res.send(url);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
