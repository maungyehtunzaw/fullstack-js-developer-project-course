var express = require('express');
var router = express.Router();
const models=require("../models");

/* GET packages listing. */
router.get('/', function(req, res, next) {
 let packages=models.Package.findAll().then((data,err)=>{
   console.log(data);
   res.data('package',data);
   res.render('packages');
 });
  
});

/* GET submit a new package. */
router.get('/submit', function(req, res, next) {

  res.render('submit');
});

router.post('/submit', function(req, res, next) {
  let formData=req.body;
  //Promise way
  models.Package.create(formData).then((package,err)=>{
    
    res.redirect("/packages");
  });
 

});

module.exports = router;
