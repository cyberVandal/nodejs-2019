var studentModel = require('../models/students');

var validationSchema = require('../validators/student');
var validator = require('node-input-validator'); 



var getAll = (req, res) => {
    //res.send('ok');
    studentModel.getAllStudents()
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

        studentModel.getSingleStudent(req.params.id)
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

        var v = new validator(req.body, validationSchema.addStudent);
        v.check()
            .then(matched => {
                if(matched){
                    return studentModel.addStudent(req.body)
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

        studentModel.removeStudent(req.params.id)
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
        var v = new validator(req.body, validationSchema.addStudent);
        v.check()
            .then(matched => {
                if(matched){
        
                    return studentModel.updateStudent(req.params.id, req.body)
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
    var validate1 = req.body.first_name !=undefined
    || req.body.last_name !=undefined
    || req.body.gpa !=undefined
    if(validate1){
        studentModel.updateStudent(req.params.id, req.body)
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