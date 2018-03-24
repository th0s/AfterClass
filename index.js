var express = require('express');
var axios = require('axios');
var bodyparser = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/client'));
app.use(bodyparser.json());




app.listen(1337, console.log('AfterClass is listening on port 1337...'))
