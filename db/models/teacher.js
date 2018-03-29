var mongoose = require('mongoose');
// Connec to AfterSchool Database
mongoose.connect('mongodb://localhost:1337/afterschool', (err) => {
  if(err) {console.log('There a Database connection issue.');}
  console.log('Connected to AfterClass Database...')
});

var Schema = mongoose.Schema;

// Create new Teacher Schema
var teacher = new Schema({  
  students: {
    names: Array,
    assignmentIds: Array
  },
  
});

module.exports.teacher = teacher;