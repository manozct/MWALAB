/**
 * Created by manozct on 7/3/2017.
 */
var express = require('express');
const crypto = require('crypto');
const decipher = crypto.createDecipher('aes256', 'asaadsaad');
var router = express.Router();

/* GET secret listing. */
router.get('/', function (req, res, next) {
    const db = req.db;

    db.homework7.findOne({}, function (err, item) {
        // res.send(item.message);
        let decrypted = decipher.update(item.message, 'hex', 'utf8');
        decrypted += decipher.final('utf-8');
        res.send(decrypted);

    });

    //res.send('respond with a resource');
});

module.exports = router;
