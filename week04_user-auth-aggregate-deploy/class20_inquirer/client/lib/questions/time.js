const time = {
    type: 'confirm',
    name: 'time',
    message: 'Is it early?'
};

const handleTime = ({ time }) => {
    if(time) {
        console.log('good luck!');
    } else {
        console.log('go home!');
    }
};

module.exports = {
    time,
    handleTime
};
