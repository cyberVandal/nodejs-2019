var studentsModel = require('../models/students')

var SearchStudents = (req, res) => {
    generateQuery(req.query)
    .then(q => {
        return  studentsModel.Search(q);
    })
    .then(data => {
        res.status(200).send('ok');
    })
    .catch(err => {
        res.status(500).send('ISE');
    });
    
   

}
var generateQuery = (qp) => {
    return new Promise((success, fail) => {
      for(let i in qp) {
        console.log(i, qp[i]);
      }
        return success ({});
    });
}
module.exports = {

    SearchStudents
}