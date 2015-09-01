var express = require('express');
var hipList = require('../lib/snippets.js')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function(req, res, next) {
  var hipstafied = '';
  req.body.unhiptext.split(' ').forEach(function(unhipword) {
    hipstafied += unhipword + ' ' + hipList[Math.round( Math.random() * hipList.length )] + ' '
  })
  res.render('index', {hipstafied: hipstafied});
});

module.exports = router;
