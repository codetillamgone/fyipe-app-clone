var express = require('express');
var router = express.Router();

/* GET home page. */



router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});
});

//POST REQUEST 
router.post('/data', function(req, res, next){
  
});

//GET REQUEST
router.get('/data', function(req, res, next){

});


module.exports = router;
 