const mongoose = require('mongoose');
require('../lib/util/connect')('mongodb://172.17.0.2:27017/video_reviews');

const User = require('../lib/models/User');
const Video = require('../lib/models/Video');
const Reviews = require('../lib/models/Reviews');
const Chance = require('chance');
const chance = new Chance();

const rating = () => Math.floor(Math.random() * 5);

const usersPromises = Promise.all(Array.apply(null, { length: 100 }).map(() => {
    return User.create({
        name: chance.name(),
        email: chance.email(),
        clearPassword: chance.word()
    });
}));

Video.create(
    {
        url: 'https://www.youtube.com/watch?v=w8bm5Sue_0Y',
        tags: ['cute', 'youtube', 'baby']
    },
    {
        url: 'https://www.youtube.com/watch?v=b2F-DItXtZs',
        tags: ['mongodb', 'funny', 'youtube']
    }
).then(videos => {
    return usersPromises.then(users => {
        const video1Reviews = Array.apply(null, { length: 100 }).map((_, i) => {
            return Reviews.create({
                video: videos[0]._id,
                user: users[i]._id,
                rating: rating()
            });
        });

        const video2Reviews = Array.apply(null, { length: 100 }).map((_, i) => {
            return Reviews.create({
                video: videos[1]._id,
                user: users[i]._id,
                rating: rating()
            });
        });

        return Promise.all(video1Reviews.concat(video2Reviews));
    });
})
    .then(console.log)
    .finally(mongoose.disconnect.bind(mongoose));
