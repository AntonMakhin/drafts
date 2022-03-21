const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./client'));
 
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './client/home.html'));
});
 
app.listen(3000);