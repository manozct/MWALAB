var express = require('express');
const crypto = require('crypto');
const decipher = crypto.createDecipher('aes256', 'asaadsaad');
var router = express.Router();

/* GET users listing. */
router.get('/secret', function (req, res, next) {
   
    res.send('respond with a resource');
});

module.exports = router;
