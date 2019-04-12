var mongoose = require('mongoose');

var student = new mongoose.model(
    'students',
    new mongoose.Schema({
        first_name: String,
        last_name: String,
        gpa: Number
    })
);


var addStudent = (data) => {

    return new Promise((success, fail) => {

        var s = new student(data);
        s.save(err => {
            if(err){
                return fail(err);
            }
            return success();

        });

    });

};

var getAllStudents = () => {

    return new Promise((success, fail) => {
        student.find({}, (err, data) => {

            if(err){
                return fail(err);
            }
            return success(data);
        });
    });
}
var getSingleStudent  = (id) => {

    return new Promise((success, fail) => {
        student.findOne({_id: id}, (err, data) => {

            if(err){
                return fail(err);
            }
            return success(data);
        });
    });

}
var removeStudent = (id) => {
    return new Promise((success, fail) => {
        student.deleteOne({_id: id}, (err) => {

            if(err){
                return fail(err);
            }
            return success();
        });

    });


}
var updateStudent = (data) => {

    return new Promise((success, fail) => {

        student.updateOne({_id: data._id }, { first_name: data.first_name, last_name: data.last_name, gpa: data.gpa  }, function(err, res) {
            if(err){
                return fail(err);
            }
            return success(res);



          });
       

    });


}
module.exports = {

    addStudent,
    getAllStudents,
    getSingleStudent,
    removeStudent,
    updateStudent
};