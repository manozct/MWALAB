/**
 * Created by manozct on 7/5/2017.
 */
var express = require('express');
var router = express.Router();
var objectId=require('mongodb').ObjectID;

/* GET users listing. */
router.get('/', function(req, res, next) {



});
router.post('/',function (req,res,next) {
    const db=req.db;
    let name=req.body.name;
    let category=req.body.category;
    let longitude=req.body.long;
    let latitude=req.body.lat;
    var docs=[{'name':name,'category':category,'longitude':longitude,'latitude':latitude}]

    db.collection('locations').insert(docs,function (err,docsInserted) {
        if(err)throw err;
        //console.log('data inserted'+ JSON.stringify(docsInserted));
        return db.close;

    });
  //  res.send('respond with a resource');
    res.redirect('/');

});

router.get('/delete/:id',function (req,res,next) {
    const db=req.db;
    const id=req.params["id"];
   // console.log("Deleted id is:"+id);
    db.locations.remove({'_id':objectId(id)});
    res.redirect('/');

});

router.post('/update',function (req,res,next) {
    const db=req.db;
    const id=req.body.id;

    const obj = {
        name: req.body.name,
        category: req.body.category,
        longitude: req.body.longitude,
        latitude: req.body.latitude
    };

    db.locations.update({'_id':objectId(id)}, obj, function (err, data) {
        res.redirect('/');
    });

});

module.exports = router;
