const mongoose = require('mongoose');
const { avgReviewsPipeline } = require('./video-aggregates');

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

videoSchema.methods.averageRating = function() {
    this.aggregate(avgReviewsPipeline);
};

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
