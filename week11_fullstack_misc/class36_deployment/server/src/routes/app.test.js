import mongoose from 'mongoose'
import request from 'supertest';
import app from './app';

mongoose.connect('mongodb://172.17.0.2:27017/people', { useNewUrlParser: true });

describe('app routes', () => {
  it('creates a user', () => {
    return request(app)
      .post('/api/users/signup')
      .send({ email: 'test@test.com', password: '1234' })
      .then(res => {
        expect(res.body).toEqual({ _id: expect.any(String), email: 'test@test.com' })
      })
  });

  it('login a user', () => {
    return request(app)
      .post('/api/users/login')
      .send({ email: 'test@test.com', password: '1234' })
      .then(res => {
        expect(res.body).toEqual({ _id: expect.any(String), email: 'test@test.com' });
        expect(res.get('X-AUTH-TOKEN')).toEqual(expect.any(String))
      });
  });

  it('fails to login a user with a bad password', () => {
    return request(app)
      .post('/api/users/login')
      .send({ email: 'test@test.com', password: '1234567' })
      .then(res => {
        expect(res.status).toEqual(401);
      });
  });
});
