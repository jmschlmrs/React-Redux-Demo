var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname + '/public/')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/register', function(req, res) {
    res.sendFile(path.join(__dirname + '/register.html'));
});

app.post('/register', function(req, res) {
    console.log(req.body);
    res.status(200);
    res.send('received a registration POST request');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
