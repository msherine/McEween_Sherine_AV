var express = require('express');
var router = express.Router();

/* GET audio page. */
router.get('/', function(req, res, next) {
  res.render('audio');
});

module.exports = router;
