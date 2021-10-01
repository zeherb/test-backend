const mongoose = require('mongoose');
const { Schema } = mongoose;

const subjectSchema = new Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    votes: [{ type: Schema.Types.ObjectId, ref: 'Vote' }]
}, {
    timestamps: true,
    versionKey: false
});

const Subject = mongoose.model('Subject', subjectSchema);
module.exports = Subject