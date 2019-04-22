var express = require('express');
var bodyParser = require('body-parser');
var mongo = require('./db/mongo');
var handlers = require('./handlers/auth');
var jwt = require('express-jwt');

mongo.init();

var api = express();
api.use(bodyParser.json());
api.use(jwt(
        {secret: 'perocarnajboljiusvet'}
    )
    .unless(
        {path:['/auth/register', '/auth/login']}
    )
);


api.post('/auth/register', handlers.register);
api.post('/auth/login', handlers.login);
api.post('/auth/token', handlers.token);


api.listen(8080, err => {


    if(err){
        console.log('Cannot start service');
    }
    console.log('RADI NA 8080');

});