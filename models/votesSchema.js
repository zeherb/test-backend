const mongoose = require('mongoose');
const { Schema } = mongoose;

const voteSchema = new Schema({
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    subject: { type: Schema.Types.ObjectId, ref: 'Subject' },
    vote: { type: Boolean, required: true }
}, {
    timestamps: true,
    versionKey: false
});

const Vote = mongoose.model('Vote', voteSchema);
module.exports = Vote