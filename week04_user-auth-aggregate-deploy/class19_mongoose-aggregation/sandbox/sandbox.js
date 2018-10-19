const mongoose = require('mongoose');
require('../lib/util/connect')('mongodb://172.17.0.2:27017/video_reviews');

const User = require('../lib/models/User');
const Video = require('../lib/models/Video');
const Reviews = require('../lib/models/Reviews');
const Chance = require('chance');
const chance = new Chance();

const rating = () => 1;



const usersPromises = Promise.all(Array.apply(null, { length: 100 }).map(() => {
    return User.create({
        name: chance.name(),
        email: chance.email(),
        clearPassword: chance.word()
    });
}));

Video.create({
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    tags: ['music', 'youtube']
}).then(video => {
    return usersPromises.then(users => {
        return Promise.all(Array.apply(null, { length: 100 }).map((_, i) => {
            return Reviews.create({
                video: video._id,
                user: users[i]._id,
                rating: rating()
            });
        }));
    })
        .then(console.log)
        .finally(mongoose.disconnect.bind(mongoose));
});
