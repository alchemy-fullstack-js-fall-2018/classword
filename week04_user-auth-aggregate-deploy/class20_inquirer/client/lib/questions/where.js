const { prompt } = require('inquirer');
const { time, handleTime } = require('./time');


const where = {
    type: 'list',
    name: 'where',
    message: 'where are you?',
    choices: ['nowhere', 'alchemy', 'home']
};

const handleWhere = ({ where }) => {
    if(where === 'nowhere') {
        console.log('good luck!');
    } else if(where === 'alchemy') {
        return prompt(time).then(handleTime);
    } else {
        console.log('rest up!');
    }
    return;
};

module.exports = {
    where,
    handleWhere
};
