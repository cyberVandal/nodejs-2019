var mongoose = require('mongoose');

var student = new mongoose.model(
    'students',
    new mongoose.Schema({
        first_name: String,
        last_name: String,
        gpa: Number
    })
);

var Search = (s) => {
    return new Promise((success, fail) => {
        student.find(s, (err, data) => {
            if(err){
                return fail(err);
            }
            return success(data);
        })
    });

}


module.exports = {
    Search
 
};