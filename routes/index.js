var express = require('express');
var router = express.Router();
var constants = require('../public/javascripts/constants')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: constants.TITLE,constants: constants });
});

router.get('/tennis', function(req, res, next) {
  res.render('tennis', { constants: constants });
});

router.get('/tennis_team', function(req, res, next) {
  res.render('tennis_team', { man_team: constants.TENNIS_MAN_TEAM_D2,constants: constants });
});


router.get('/gym', function(req, res, next) {
  res.render('gym', { title: constants.TITLE,constants: constants });
});

router.get('/football', function(req, res, next) {
  res.render('football', { title: constants.TITLE,constants: constants });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: constants.TITLE,constants: constants });
});

router.get('/location', function(req, res, next) {
  res.render('location', { title: constants.TITLE,constants: constants });
});

router.get('/history', function(req, res, next) {
  res.render('history', { title: constants.TITLE,constants: constants });
});

module.exports = router;
