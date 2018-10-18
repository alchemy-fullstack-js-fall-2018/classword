const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    tags: [String]
}, {
    toJSON: {
        transform: function(doc, ret) {
            delete ret.__v;
        }
    }
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
