const router = require('express').Router();
const Video = require('../models/Video');

module.exports = router
    .post('/', (req, res, next) => {
        const { url, tags } = req.body;
        Video.create({
            url,
            tags
        })
            .then(video => {
                res.json(video);
            })
            .catch(next);
    })

    .get('/', (req, res, next) => {
        Video
            .find()
            .select({ __v: false })
            .lean()
            .then(video => res.json(video))
            .catch(next)
    })

    .get('/:id', (req, res, next) => {
        const { id } = req.params;
        Video
            .findById(id)
            .select({ __v: false })
            .lean()
            .then(video => res.json(video));
    });
