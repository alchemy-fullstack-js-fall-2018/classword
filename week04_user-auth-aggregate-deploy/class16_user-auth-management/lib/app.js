const express = require('express');
const app = express();
const checkMongo = require('./util/check-mongo');
const morgan = require('morgan');
const { handler } = require('./util/errors');
const bearerToken = require('./util/bearer-token');
const ensureAuth = require('./util/ensure-auth');

app.use(checkMongo);

app.use(morgan('dev', {
    skip() {
        // skip logging on test
        return process.env.NODE_ENV === 'test';
    }
}));

app.use(express.static('public'));
app.use(express.json());
app.use(bearerToken);

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

app.use(ensureAuth);

const tweetRoutes = require('./routes/tweets');
app.use('/api/tweets', tweetRoutes);

app.use((req, res) => {
    console.log('This is 404');
    res.status(404);
    res.end('404 Not Found');
});

// Error Handler middleware is last!
app.use(handler);

module.exports = app;
