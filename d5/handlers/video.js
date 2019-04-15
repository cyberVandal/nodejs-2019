var videoModel = require('../models/video');

var validationSchema = require('../validators/video');
var validator = require('node-input-validator'); 



var getAll = (req, res) => {
    //res.send('ok');
    videoModel.getAllVideos()
    .then(data => {
        return res.status(200).send(data);
    })
    .catch(err => {
        console.log(err);
        return res.status(500).send('internall server error');
    });
}

var getOne = (req, res) => {
    //res.send('ok');
    if(req.params.id != undefined && req.params.id != " "){

        videoModel.getSingleStudent(req.params.id)
            .then(data => {
                return res.status(200).send(data);
            })
            .catch(err =>{
                console.log(err);
                return res.status(500).send('internall server error');
            });
    }else{
        return res.status(400).send('bad request');
    }

}

var add = (req, res) => {
     //res.send('ok');

        var v = new validator(req.body, validationSchema.addVideo);
        v.check()
            .then(matched => {
                if(matched){
                    return videoModel.addVideo(req.body)
                }else{
                    throw new Error("Validation failed");
                }
            })

     .then(() => {
        return res.status(201).send('ok');
     })
     .catch(err => {
        return res.status(501).send(err);

     });
}

var remove = (req, res) => {
    //res.send('ok');
    if(req.params.id != undefined && req.params.id != " "){

        videoModel.removeVideo(req.params.id)
            .then(() => {
                return res.status(200).send("Studentot e izbrishan Uspeshno.");
            })
            .catch(err =>{
                console.log(err);
                return res.status(500).send('internall server error');
            });
    }else{
        return res.status(400).send('bad request');
    }

}

var update = (req, res) => {
    //res.send('ok');
    
    // var validate = req.body.first_name !=undefined
    //     && req.body.last_name !=undefined
    //     && req.body.gpa !=undefined
        var v = new validator(req.body, validationSchema.addVideo);
        v.check()
            .then(matched => {
                if(matched){
        
                    return videoModel.updateVideo(req.params.id, req.body)
                }else{

                    throw new Error("Validation failed");
                }

            })
       
            .then(() => {
                return res.status(200).send("Studentot e Azuriran Uspeshno.");
            })
            .catch(err =>{
                console.log(err);
                return res.status(500).send('internall server error');
            });
   
}

var patch = (req, res) => {
    // res.send('ok');
    var validate1 = req.body.name !=undefined
    || req.body.genre !=undefined
    || req.body. imdb !=undefined
    if(validate1){
        videoModel.updateVideo(req.params.id, req.body)
        .then(() => {
            return res.status(200).send("Studentot e Azuriran Uspeshno.");
        })
        .catch(err =>{
            console.log(err);
            return res.status(500).send('internall server error');
        });
    }else{
        return res.status(400).send('bad request');
    }
  
}

module.exports = {

    getAll,
    getOne,
    add,
    remove,
    update,
    patch


};