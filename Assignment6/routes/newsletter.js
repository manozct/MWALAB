/**
 * Created by manozct on 7/3/2017.
 */
const express = require('express');
const router = express.Router();
const fs = require('fs');
const session = require('express-session');
const csrf = require('csurf');
const validator = require('express-validator');
var bodyParser = require('body-parser');

router.use(session({
    secret: 'session_039508'
}));
router.use(csrf());
router.use(function (req, res, next) {
    res.locals.csrftoken = req.csrfToken();
    next();

});
router.use(bodyParser.urlencoded({extended: true}));
router.use(validator());


router.get('/', function (req, res, next) {
    // res.send('Welcome to NewsLetter');
    res.render('newsletter', {csrftoken: req.csrfToken()});

});
router.post('/', function (req, res) {
    console.log('post test');
    req.assert('email', "Valid Email is required !").notEmpty().isEmail();
    var errors = req.validationErrors();
    if (!errors) {
        let email = req.body.email;
        fs.appendFileSync('subscribers.txt', email, function (err) {
            if (err)throw err;


        });
        console.log(email);
        res.render('thankyou', {email});

    }
    else {
        res.render('newsletter', {csrftoken: req.csrfToken(), error: errors[0].msg});
    }


    //res.send(`Your email ${email} has been added successfully to our subscribers list`);

})

module.exports = router;

