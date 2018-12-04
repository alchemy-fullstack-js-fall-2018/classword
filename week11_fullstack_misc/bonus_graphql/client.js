const request = require('superagent');

const query = `
{
  polls {
    title
  }
}
`

request
  .get('http://localhost:7890/graphql')
  .query({ query })
  .send()
  .then(res => {
    console.log(res.body);
  })
  .catch(err => console.error(err.response.body))
