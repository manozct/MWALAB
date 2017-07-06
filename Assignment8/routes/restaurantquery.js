/**
 * Created by manozct on 7/4/2017.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    const db = req.db;

    /*1.display all the documents in the collection restaurant*/
    db.restaurant.find({}).each(function (err, data) {
        if (!data) next();
        //  else console.log(data);

    });
    /*2.display restaurant_id,name,district and cuisine for all the documents in the collection restaurant*/
    db.restaurant.find({}, {restaurant_id: 1, name: 1, district: 1, cuisine: 1}).each(function (err, data) {
        if (!data) next();
        //else console.log(data);

    });
    /*3.display restaurant_id,name,district and cuisine but exclude the field _id for all the documents in the collection restaurant*/
    db.restaurant.find({}, {restaurant_id: 1, name: 1, district: 1, cuisine: 1, _id: 0}).each(function (err, data) {
        if (!data) next();
        //else console.log(data);

    });

    /*4.display restaurant_id,name,district and cuisine but exclude the field _id for all the documents in the collection restaurant*/
    db.restaurant.find({}, {restaurant_id: 1, name: 1, district: 1, cuisine: 1, _id: 0}).each(function (err, data) {
        if (!data) next();
        //  else console.log(data);

    });

    /*5.display all the restaurant which is in the district Bronx*/
    db.restaurant.find({'district': 'Bronx'}, {}).each(function (err, data) {
        if (!data) next();
        // else console.log(data);

    });

    /*6.display the first 5 restaurant which is in the district Bronx*/
    db.restaurant.find({'district': 'Bronx'}, {}).limit(5).each(function (err, data) {
        if (!data) next();
        // else console.log(data);

    });

    /*7.display the first 5 next restaurants after skipping first 5 which are in the district Bronx*/
    db.restaurant.find({'district': 'Bronx'}, {}).skip(5).limit(5).each(function (err, data) {
        if (!data) next();
        //else console.log(data);

    });
    // 8. find restaurant which locates in latitude value less than -95.754168
    db.restaurant.find({'address.coord.1': {$lt: -95.754168}}, {}).each(function (err, data) {
        if (!data) next();
        // else console.log(data);

    });


    // 9. find the restaurants that does not prepare any cuisine of 'American' and their grade score more than 70 and latitude less than -65.754168
    db.restaurant.find({$and: [{grades: {$elemMatch: {score: {$gt: 70}}}}, {'cuisine': {$ne: 'American'}}, {'address.coord.1': {$lt: -65.754168}}]}, {}).each(function (err, data) {
        if (!data) next();
        // else console.log(data);

    });

    //10. find the restaurant_id,name,district and cuisine for those restaurants which contains 'Wil' as first three letter for its name

    db.restaurant.find({name: {$regex: '^Wil', $options: 'i'}}, {
        'restaurant_id': 1,
        'name': 1,
        'district': 1,
        'cuisine': 1,
        '_id': 0
    }).each(function (err, data) {
        if (!data) next();
        //else console.log(data);

    });

    //10. find the restaurant_id,name,district and cuisine for those restaurants which contains 'ces' as last three letter for its name
    db.restaurant.find({name: {$regex: 'ces$', $options: 'i'}}, {
        'restaurant_id': 1,
        'name': 1,
        'district': 1,
        'cuisine': 1,
        '_id': 0
    }).each(function (err, data) {
        if (!data) next();
        else console.log(data);

    });


    // 12 find the restaurant_id,name,district and cuisine for those restaurants which contains 'Reg' as three letters somewhere in its name
    db.restaurant.find({name: {$regex: 'Reg', $options: 'i'}}, {
        'restaurant_id': 1,
        'name': 1,
        'district': 1,
        'cuisine': 1,
        '_id': 0
    }).each(function (err, data) {
        if (!data) next();
        //else console.log(data);

    });

    // 13.find the restaurants which belongs to the district Bronx and prepared either American or Chinese dish
    db.restaurant.find({$and: [{district: 'Bronx'}, {cuisine: {$in: ['American ', 'Chinese']}}]}, {}).each(function (err, data) {
        if (!data) next();
        // else console.log(data);

    });
    // 14. find restaurant_id, name, district and cuisine for those restaurants which belongs to the district Staten Island or Queens or Bronx or Brooklyn
    db.restaurant.find({district: {$in: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn']}}, {
        'restaurant_id': 1,
        'name': 1,
        'district': 1,
        'cuisine': 1
    }).each(function (err, data) {
        if (!data) next();
        //else console.log(data);

    });

    // 15. find the restaurant_id,name,district and cusine for those restaurants which are not belonging to the district State Island or Queens or Bronx or Brooklyn
    db.restaurant.find({district: {$nin: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn']}}, {
        'restaurant_id': 1,
        'name': 1,
        'district': 1,
        'cuisine': 1
    }).each(function (err, data) {
        if (!data) next();
        // else console.log(data);

    });
    //16. find the restaurant_id, name,district and cuisine for those restaurants which achieved a score which is not more than 10
    db.restaurant.find({grades: {$elemMatch: {score: {$lte: 10}}}}, {
        'restaurant_id': 1,
        'name': 1,
        'district': 1,
        'cuisine': 1
    }).each(function (err, data) {
        if (!data) next();
       // else console.log(data);

    });

    //17
    db.restaurant.find({$and:[{'address.coord.1':{$gte:42,$lte:52}}]}, {'restaurant_id': 1,'name': 1,'address': 1,'cuisine': 1,'address.coord':1}).each(function (err, data) {
        if (!data) next();
        else console.log(data);

    });

    // 18
    db.restaurant.find({},{name:1,_id:0}).sort({name:1}).each(function (err, data) {
        if (!data) next();
        //else console.log(data);

    });
     //19
    db.restaurant.find({},{name:1,_id:0}).sort({name:-1}).each(function (err, data) {
        if (!data) next();
       // else console.log(data);

    });

    //20
    db.restaurant.find({},{}).sort({name:1,district:-1}).each(function (err, data) {
        if (!data) next();
        //else console.log(data);

    });

    //21

    db.restaurant.find({'address.street':{$exists:false}},{}).each(function (err, data) {
        if (!data) next();
        //else console.log(data);

    });

    //22

    db.restaurant.find({'address.coord':{$type:"double"}},{}).each(function (err, data) {
        if (!data) next();
        //else console.log(data);

    });

    //23
    db.restaurant.find({name: {$regex: '^Mad', $options: 'i'}}, {
        'name': 1,
        'district': 1,
        'address.coord': 1,
        'address.street': 1,
        '_id': 0
    }).each(function (err, data) {
        if (!data) next();
       // else console.log(data);

    });








});
module.exports = router;