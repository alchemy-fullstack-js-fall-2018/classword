import { config } from 'dotenv';
import connect from '../utils/connect';
import mongoose from 'mongoose';
import request from 'supertest';
import app from './app';

config();
connect('mongodb://172.17.0.2:27017/poll_test');

const createPoll = poll => {
  return request(app)
    .post('/api/polls')
    .send(poll)
    .then(res => res.body);
}

describe('poll routes', () => {

  beforeEach(() => {
    mongoose.connection.dropCollection('polls');
  });
  it('can create a new poll', () => {
    const poll = { title: 'My Poll', candidates: [{ name: 'My Candidate1' }, { name: 'My CandidateB' }] }
    return request(app)
      .post('/api/polls')
      .send(poll)
      .then(res => {
        expect(res.body).toEqual({
          ...poll,
          _id: expect.any(String),
          candidates: [
            { ...poll.candidates[0], _id: expect.any(String) },
            { ...poll.candidates[1], _id: expect.any(String) }
          ],
          __v: 0
        });
      });
  });

  it('can get a list of all polls', () => {
    const poll1 = { title: 'My Poll', candidates: [{ name: 'My Candidate1' }, { name: 'My CandidateB' }] };
    const poll2 = { title: 'My Poll2', candidates: [{ name: 'My CandidateA' }, { name: 'My Candidate2' }] }
    return Promise.all([createPoll(poll1), createPoll(poll2)])
      .then(([poll1Created, poll2Created]) => {
        return Promise.all([
          Promise.resolve(poll1Created),
          Promise.resolve(poll2Created),
          request(app).get('/api/polls')
        ]);
      })
      .then(([poll1Created, poll2Created, res]) => {
        const polls = res.body
        expect(polls).toHaveLength(2);
        expect(polls).toContainEqual(poll1Created);
        expect(polls).toContainEqual(poll2Created);
      });
  });
});
