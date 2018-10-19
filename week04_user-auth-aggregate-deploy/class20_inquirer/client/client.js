require('dotenv').config();
const inquirer = require('inquirer');
const opn = require('opn');
const request = require('superagent');
const parseMessage = require('./lib/parseMessage');

// const { where, handleWhere } = require('./lib/questions/where');

// inquirer.prompt(where)
//     .then(handleWhere);

// const questions = [
//     {
//         type: 'list',
//         name: 'pizza',
//         message: 'What pizza do you like?',
//         choices: ['cheese', 'hawaiian', 'margarita']
//     }
// ];


// inquirer.prompt(questions)
//     .then(answers => {
//         const { pizza } = answers;
//         if(pizza === 'cheese') {
//             console.log('not good');
//         } else {
//             const pizzaQuestion = {
//                 type: 'list',
//                 name: 'thickness',
//                 message: `How thick was the crust of your ${pizza} pizza?`,
//                 choices: ['thin', 'regular', 'thick']
//             };
//             if(pizza === 'hawaiian') {
//                 return inquirer.prompt(pizzaQuestion);
//             } else {
//                 return inquirer.prompt(pizzaQuestion);
//             }
//         }
//     })
//     .then(answers => {
//         if(answers) {
//             const { thickness } = answers;
//             console.log(thickness);
//         }
//     });


const username = {
    type: 'input',
    name: 'username',
    message: 'What is your login?'
};

const password = {
    type: 'password',
    name: 'password',
    message: 'What is your password?'
};

const question = {
    type: 'input',
    name: 'ratings',
    message: 'What would you like?'
};

inquirer.prompt([
    username,
    password,
    question
])
    .then(answers => {
        const { ratings } = answers;
        parseMessage(ratings)
            .then(parsed => {
                const { qualifier, value } = parsed.quality;
                request
                    .get(`${process.env.API_HOST}/api/videos/rating`)
                    .query({
                        qualifier,
                        value
                    })
                    .end((err, res) => {
                        console.log(res.body);
                        if (res.body.length > 0) {
                            const { url } = res.body[0];
                            opn(url);
                        }
                    });
            });
    });
