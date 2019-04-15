var express = require('express');
var mongo = require('./db/mongo');
var video = require('./handlers/video');
var bodyParser = require('body-parser');


mongo.init();

var api = express();

api.use(bodyParser.json());

//routes
api.get('/videos', video.getAll);
api.get('/videos/:id', video.getOne);
api.post('/videos', video.add);
api.delete('/videos/:id', video.remove);
api.put('/videos/:id', video.update);
api.patch('/videos/:id', video.patch);


api.listen(8080, err => {
    if(err){
        return console.log(err);
    }
    console.log('NE CUJE SE, AL RADI NA 8080');
});
