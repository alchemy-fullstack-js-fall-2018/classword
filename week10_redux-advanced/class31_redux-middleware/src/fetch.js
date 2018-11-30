import { request } from 'http';

request({
  hostname: 'www.mcso.us',
  path: '/PAID/Home/SearchResults',
  method: 'POST',
}, res => {
  res.on('data', () => {

  });
});
