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
