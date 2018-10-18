const mongoose = require('mongoose');

const match = {
    $match: { _id: mongoose.Types.ObjectId(this._id) }
};

const lookupReviews = {
    $lookup: {
        from: 'reviews',
        localField: '_id',
        foreignField: 'video',
        as: 'reviews'
    }
};

const avgReviews = {
    $project: {
        avgRating: { $avg: '$reviews.rating' }
    }
};

const avgReviewsPipeline = [
    match,
    lookupReviews,
    avgReviews
];

module.exports = {
    avgReviewsPipeline
};
