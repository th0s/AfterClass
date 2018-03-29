// Import Modules 
var express = require('express');
var axios = require('axios');
var bodyparser = require('body-parser');

var app = express();

// Serve Static Html
app.use(express.static(__dirname + '/client/dist'));
app.use(bodyparser.json());

// Routing


// Create and Listen on Port
app.listen(1337, (err) => {
  if (err) {console.log('There was a connection issue: ', err);}
  console.log('AfterClass listening on port 1337...');
});
