var studentModel = require('../models/students');



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
     studentModel.addStudent(req.body)
     .then(() => {
        return res.status(201).send('ok');
     })
     .catch(err => {
        return res.status(501).send(err);

     });
}

var remove = (req, res) => {
    res.send('ok');
}

var update = (req, res) => {
    res.send('ok');
}

var patch = (req, res) => {
    res.send('ok');
}

module.exports = {

    getAll,
    getOne,
    add,
    remove,
    update,
    patch


};