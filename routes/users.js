const router =require('express').Router();
const User = require('../model/User');
const verify=require('./verifyinToken')


router.get('/',verify ,function(req, res) {
    User.find({}, { name: 1 }, function(err, result) {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    });
  });


module.exports=router;