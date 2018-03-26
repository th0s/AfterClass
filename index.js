var express = require('express');
var axios = require('axios');
var bodyparser = require('body-parser');

var app = express();

console.log(__dirname + '/client/dist')
app.use(express.static(__dirname + '/client/dist'));
app.use(bodyparser.json());

app.get('*', (req, res) => {
    console.log('Got here!')
})

app.listen(1337, (err) => {
    if (err) {console.log('There was a connection issue: ', err)}
    console.log('AfterClass listening on port 1337...')
})
