var express = require('express');
var router = express.Router();

/* GET home page. */

var postData = {data : "MyData", condition:true};
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', condition:false, status:"success" });
});

router.post('/data', function(req, res, next){
 res.redirect('/data/', postData);
});

module.exports = router;
