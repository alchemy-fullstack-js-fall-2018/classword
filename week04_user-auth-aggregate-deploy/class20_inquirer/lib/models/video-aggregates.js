const mongoose = require('mongoose');

const match = id => ({
    '$match': { _id: mongoose.Types.ObjectId(id) }
});

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
        url: '$url',
        tags: '$tags',
        avgRating: { $avg: '$reviews.rating' }
    }
};

const avgReviewsPipeline = id => {
    return [
        match(id),
        lookupReviews,
        avgReviews
    ];
};

const avgReviewsWithMatchPipeline = (qualifier, value) => {
    // { $match: { avgRating: { $gte: 2 } } }
    const match = { '$match': { avgRating: { [`${'$'}${qualifier}`]: parseInt(value) } } };
    return [
        lookupReviews,
        avgReviews,
        match
    ];
};

module.exports = {
    avgReviewsPipeline,
    avgReviewsWithMatchPipeline
};
