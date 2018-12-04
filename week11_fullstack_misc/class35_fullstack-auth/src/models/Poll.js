import { Schema, model } from 'mongoose';

const pollSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  candidates: {
    type: [{ name: String }]
  }
}, {
    toJSON: {
      transform: (doc, ret) => {
        delete ret.__v;
        return ret;
      }
    }
  });

pollSchema.methods.results = function () {
  return this.model('Vote').aggregate([
    { $match: { pollId: this._id } },
    { $unwind: '$votes' },
    {
      $group: {
        _id: {
          candidateId: '$votes.candidateId',
          candidateName: '$votes.candidateName'
        },
        avgVote: { $avg: '$votes.vote' }
      }
    },
    { $project: { _id: false, candidateName: '$_id.candidateName', candidateId: '$_id.candidateId', avgVote: '$avgVote' } }
  ]);
};

export default model('Poll', pollSchema);
