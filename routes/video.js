var express = require('express');
var router = express.Router();

/* GET video page. */
router.get('/', function(req, res, next) {
  res.render('video');
});

module.exports = router;
