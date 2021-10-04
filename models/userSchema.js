const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    address: { type: String, required: true, trim: true },
    voteNumber: { type: Number, default: 5 }
}, {
    timestamps: true,
    versionKey: false
});

const User = mongoose.model('User', userSchema);
module.exports = User