var express = require('express');
var mongo = require('./db/mongo');
var video = require('./handlers/video');
var bodyParser = require('body-parser');


mongo.init();

var api = express();

api.use(bodyParser.json());

//routes
api.get('/video', video.getAll);
api.get('/video/:id', video.getOne);
api.post('/video', video.add);
api.delete('/video/:id', video.remove);
api.put('/video/:id', video.update);
api.patch('/video/:id', video.patch);


api.listen(8080, err => {
    if(err){
        return console.log(err);
    }
    console.log('RADI NA 8080');
});
