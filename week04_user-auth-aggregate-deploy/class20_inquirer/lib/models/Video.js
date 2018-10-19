const mongoose = require('mongoose');
const { avgReviewsPipeline, avgReviewsWithMatchPipeline } = require('./video-aggregates');

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

videoSchema.statics.averageRating = function(id) {
    return this.aggregate(avgReviewsPipeline(id));
};

videoSchema.statics.averageRatingsMatch = function(qualifier, value) {
    return this.aggregate(avgReviewsWithMatchPipeline(qualifier, value));
};

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
