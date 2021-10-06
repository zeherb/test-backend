const Vote = require('../models/votesSchema')
const Subject = require('../models/subjectSchema')
const User = require('../models/userSchema')

exports.create = async (req, res) => {
    try {
        const user = await User.findById(req.body.owner)
        if (user.voteNumber > 0) {
            const vote = await Vote.create(req.body)
            // affect this vote to the subject 
            const subject = await Subject.findByIdAndUpdate(vote.subject, { $push: { votes: vote._id } }, { new: true })
            // update users vote number
            const UpdatedUser = await User.findByIdAndUpdate(vote.owner, { "$inc": { voteNumber: -1 } })
            res.status(200).json({ message: 'Vote created successfully' })
        } else {
            res.status(400).json({ message: 'You have reached your voting limit' })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' })
    }
}