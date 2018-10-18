db.getCollection('reviews').aggregate([
    {
        $group: {
            _id: '$rating',
            count: { $sum: 1 }
        }
    }
]);

db.getCollection('videos').aggregate([
    { $unwind: '$tags' }
]);

// SELECT 
//    *
// FROM
//     reviews
// LEFT JOIN
//     videos
// ON
//     videos.id = reviews.video
// GROUP BY reviews.video
// ORDER BY avgRating
db.getCollection('reviews').aggregate([
    { $sample: { size: 10 } },
    {
        $group: {
            _id: '$video',
            avgRating: { $avg: '$rating' },
            min: { $min: '$rating' },
            max: { $max: '$rating' },
        }
    },
    {
        $lookup: {
            from: 'videos',
            localField: '_id',
            foreignField: '_id',
            as: 'video'
        }
    },
    {
        $sort: { avgRating: -1 }
    }
]);

db.getCollection('videos').aggregate([
    {
        $unwind: '$tags'
    },
    {
        $lookup: {
            from: 'reviews',
            localField: '_id',
            foreignField: 'video',
            as: 'reviews'
        }
    },
    {
        $unwind: '$reviews'
    },
    {
        $group: {
            _id: '$tags',
            avgRating: { $avg: '$reviews.rating' }
        }
    }
]);
