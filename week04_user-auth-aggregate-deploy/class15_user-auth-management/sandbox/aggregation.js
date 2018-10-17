db.getCollection('busnessReviews').aggregate([
    {
        $group: {
            _id: '$user',
            users: { $addToSet: '$businessName' },
            usersWithSamePassword: { $avg: '$rating' }
        }
    }
]);
