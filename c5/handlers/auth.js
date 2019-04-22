var userModel = require('../models/auth');
var userValidator = require('../validators/auth');
var bcrypt = require('bcrypt-nodejs');
var validator = require('node-input-validator');
var jwt = require('jsonwebtoken');


var register = (req, res) => {
    var v = new validator(req.body, userValidator.addUser);
    v.check()
        .then(matched => {
            if(matched && req.body.password == req.body.password1){
                return userModel.getUserByEmail(req.body.email);
            }
            throw new Error("Validation failed");
           
        })
        .then(data => {

            if(data){
                return res.status(400).send("Postoi takov korisnik");
            }
           // return userModel.addUser(req.body);
           return userModel.addUser({
                full_name: req.body.full_name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password)
           });
         })
         .then(() => {
            return res.status(200).send('ok');
         })
         .catch(err => {
            console.log(err);     
            return res.status(500).send('Internal Error');
    
         });

   // res.status(200).send('ok');
}
var login = (req, res) => {
    var v = new validator(req.body, userValidator.loginUser);
    v.check()
        .then(matched => {
            if(matched){
                return userModel.getUserByEmail(req.body.email);
            }
            throw new Error("Validacija ne e uspeshna");

        })
        .then(data => {
            if(data){
                bcrypt.compare(req.body.password, data.password, function(err, r){
                    if(r){
                        // Send JWT ....
                        var   token = jwt.sign(
                            {
                                uid: data._id,
                                name: data.full_name,
                                email: data.email
                            },
                            'perocarnajboljiusvet'
                        );
                        res.status(200).send(token);
                    }else{
                        res.status(400).send("Bad Request")
                    }
                });
                return;
            }
            throw new Error("Userot ne postoi")
            
        })
        .catch(err => {

            console.log(err);
            res.status(500).send('Internal Server Error');
        });
    //res.status(200).send('ok');

   
    
}
var token = (req, res) => {
    res.status(200).send(req.user);
}

module.exports ={
    register,
    login,
    token
}