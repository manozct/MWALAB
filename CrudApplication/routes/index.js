var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 // res.render('index', { title: 'Express' });
 // res.redirect('crud');
    const db=req.db;
    db.locations.find({}).toArray(function (err,data) {
        console.log(JSON.stringify(data));
        res.render('index',{locationData:data});

    });
});

module.exports = router;
