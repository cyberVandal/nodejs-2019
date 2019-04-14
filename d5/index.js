var express = require('express');
var api = express();
var mongo = require('./db/mongo');
var bodyParser = require('body-parser');


api.use(bodyParser.json());

api.listen(8080, err => {
    if(err){
       return console.log(err);
    }
    return console.log("RADI NA 8080")
});



