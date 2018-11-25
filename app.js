var express = require('express');
var app = express();

//First Api 
app.get('/', function(req, res){
    res.send('GET request to the homepage');
});

// GET method route
app.get('/data', function (req, res) {
    res.send('GET request to data route')
    console.log("data route get request")
  })
  
  // POST method route
app.post('/data', function (req, res) {
    res.send('POST request to data route')
    console.log("data route post request")
  })

app.listen(8000);
