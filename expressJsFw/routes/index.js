var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',name:'YeHtun',age:120 });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact us',name:'YeHtun',age:120 });
});

module.exports = router;
