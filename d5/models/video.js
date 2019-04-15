var mongoose = require('mongoose');

var video = new mongoose.model(
    'video',
    new mongoose.Schema({
        name: String,
        genre: String,
        imdb: Number
    })
);


var addVideo = (data) => {

    return new Promise((success, fail) => {

        var v = new video(data);
        v.save(err => {
            if(err){
                return fail(err);
            }
            return success();

        });

    });

};

var getAllVideos = () => {

    return new Promise((success, fail) => {
        video.find({}, (err, data) => {

            if(err){
                return fail(err);
            }
            return success(data);
        });
    });
}
var getSingleVideo  = (id) => {

    return new Promise((success, fail) => {
        video.findOne({_id: id}, (err, data) => {

            if(err){
                return fail(err);
            }
            return success(data);
        });
    });

}
var removeVideo = (id) => {
    return new Promise((success, fail) => {
        video.deleteOne({_id: id}, (err) => {

            if(err){
                return fail(err);
            }
            return success();
        });

    });


}
var updateVideo = (id, data) => {

    return new Promise((success, fail) => {

        video.updateOne({_id: id }, data , err => {
            if(err){
                return fail(err);
            }
            return success();



          });
       

    });


}
module.exports = {

    addVideo,
    getAllVideos,
    getSingleVideo,
    removeVideo,
    updateVideo
};