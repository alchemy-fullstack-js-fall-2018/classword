const { Wit } = require('node-wit');

const client = new Wit({
    accessToken: process.env.WIT_SECRET
});

const getValue = (item = [{}], defaultValue) => item[0].value || defaultValue;

const getCollection = entities => getValue(entities.collection, 'videos');

const getField = entities => getValue(entities.field, 'rating');

const getQuality = entities => {
    let qualifier = getValue(entities.qualifier, '');
    let value = 0;
    const identifier = getValue(entities.quality, 0);

    if(identifier === 'exceptional') {
        qualifier = 'gte';
        value = 5;
    } else if(identifier === 'good') {
        qualifier = 'gte';
        value = 4;
    } else if(identifier === 'bad') {
        qualifier = 'lte';
        value = 2;
    } else if(identifier === 'average') {
        qualifier = 'gte';
        value = 3;
    } else {
        value = parseInt(identifier) || 0;
    }

    return {
        qualifier,
        value
    };
};

module.exports = text => {
    return client.message(text)
        .then(data => {
            const { entities } = data;

            return {
                collection: getCollection(entities),
                field: getField(entities),
                quality: getQuality(entities)
            };
        });
};
