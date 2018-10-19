const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: true
    },
    video: { type: mongoose.Schema.Types.ObjectId, ref: 'Video' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
