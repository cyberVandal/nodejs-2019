var data = require('../data/students');

var getAll = (req, res) => {
    res.send(data.students);
}

var getOne = (req, res) => {
    var id = req.param('id');
    if(data.students[id] != undefined){
        return res.send(data.students[id]);
    }
    return res.status(404).send('Not Faund');
}

var add = (req, res) => {

    var validate = req.body.firs_name !=undefined
        && req.body.last_name !=undefined
        && req.body.gpa !=undefined

        if(validate){
            data.students.push({
                firs_name: req.body.firs_name,
                last_name: req.body.last_name,
                gpa: req.body.gpa
            });
            return res.status(201).send(req.body);
        }
    return res.status(400).send('Bad request');
}

var remove = (req, res) => {

    var id = req.param('id');
    if(data.students[id] != undefined){
        return res.status(201).send(data.students.splice(id));
    }
    return res.status(404).send('Not Faund');
    
}

var update = (req, res) => {
    res.send('OK');
}

var patch = (req, res) => {
    res.send('OK');
}

module.exports = {

getAll,
getOne,
add,
remove,
update,
patch
}