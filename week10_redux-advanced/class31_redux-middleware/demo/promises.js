import { readFile } from 'fs';
import { promisify } from 'util';

const promiseRead = promisify(readFile);

// const promise = promiseRead(__dirname + '/../README.md');

promise
  .then(contents => { // pending
    // fulfilled
    // executed when a promise resolves (is successful);
    return contents.toString();
  })
  .then(contents => console.log(contents))
  .catch(() => {
    // rejected
    // executed when the promise rejects (is unsuccessful)
  });

// Promise.resolve('hi there'); // fulfill the promise as successful;
// Promise.reject(''); // set the promise to the reject state





const promises = [
  () => promiseRead(__dirname + '/../README.md'),
  () => promiseRead(__dirname + '/../README.md')
];

// cant do because of rate limit
Promise.all(promises)
  .then(allResults => {

  })

// Run promises in sequence
promises.reduce((acc, promiseFn) => {
  return acc.then(() => {
    return promiseFn();
  });
}, Promise.resolve());


// promise chain
readFromFile
  .then(stripNewLine)
  .then(capitalizeLetters)
  .then(changeColorToRed)
  .then(sendAsEmail);


// async/await style
async function() {
  const contentOfFlie = await readFromFile();
  const stripedLines = await contentOfFile(contentOfFile);
  const capitalized = capitalizeLetters(stripedLines)
  // etc...
}

// First promise to finish
Promise.race(promises)
then(resultOfTheOneThatFinishedFirst => {

});

const readFilePromise = new Promise((resolve, reject) => {
  readFile(__dirname + '../README.md', (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

function readAnyFile(fileName) {
  return new Promise((resolve, reject) => {
    readFile(__dirname + fileName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}


readFilePromise
  .then(dataFromFile => console.log(dataFromFile))
  .catch(errorFromFile => console.error(errorFromFile));

readAnyFile('../README.md')
  .then(dataFromFile => console.log(dataFromFile))
  .catch(errorFromFile => console.error(errorFromFile))
  .finally(() => {
    // always will execute
  })
