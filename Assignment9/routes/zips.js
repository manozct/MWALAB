/**
 * Created by manozct on 7/5/2017.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
/*router.get('/', function(req, res, next) {
    const db=req.get();
    res.send('respond with a resource');
});*/

router.get('/',function (req,res,next) {

    const db=req.db;
    //1 all the zip codes in Iowa State
    db.zips.aggregate([{$match:{state:"IA"}},{$project:{_id:1}}],function (err,data) {
        //console.log(data);

    });
    //2 find all the zip codes with population less than 1000
    db.zips.aggregate([{$match:{pop:{$lt:1000}}},{$project:{_id:1}}],function (err,data) {
        //console.log(data);
    });

    //3 find all cities that have more than one zip code, sort the results based by state and city name
    db.zips.aggregate([
        {$group:{_id:{'city':'$city','state':'$state'},'numZipCodes':{$sum:1}}},
        {$match:{'numZipCodes':{$gt:1}}},
        {$project:{'_id':0,'city':'$_id.city','state':'$_id.state','numZipCodes':1}},
        {$sort:{'state':1,'city':1}}

    ],function (err,data) {
       // console.log(data);

        });

    //4 display the least populated city in each state
    db.zips.aggregate([
        {$group:{_id:{'city':'$city','state':'$state'},'population':{$sum:'$pop'}}},
        {$sort:{'population':1}},
        {$group:{'_id':'$_id.state','city':{$first:'$_id.city'},'population':{$first:'$population'}}},
        {$sort:{'_id':1}}
    ],function (err,data) {
        console.log(data);

    });

    res.send('respond with a resource');


});

module.exports = router;
