var express = require('express');
var router = express.Router();

router.use('/signup',require('./signup'));
router.use('/signin',require('./signin.js'));

module.exports = router;
