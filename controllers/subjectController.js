const Subject = require('../models/subjectSchema')
const Vote = require('../models/votesSchema')


exports.create = async (req, res) => {
    try {
        const SubjectData = req.body
        if (!("title" in SubjectData && "description" in SubjectData)) {
            res.status(400).json({ message: "Empty Field !" })
        } else {
            const newSubject = await Subject.create(SubjectData)
            res.status(200).json({ message: "Subject created successfully" })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' })
    }
}

exports.update = async (req, res) => {
    try {
        const SubjectData = req.body
        const newSubject = await Subject.findByIdAndUpdate(req.params.subjectId, SubjectData, { new: true })
        res.status(200).json({ message: "Subject updated successfully" })
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' })
    }
}

exports.getAll = async (req, res) => {
    try {
        const subjects = await Subject.find({}).populate({ path: 'votes' })
        res.status(200).json(subjects)
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' })
    }
}
exports.getById = async (req, res) => {
    try {
        const subject = await Subject.findById(req.params.subjectId).populate({ path: 'votes' })
        res.status(200).json(subject)
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' })
    }
}
exports.delete = async (req, res) => {
    try {
        // deleting all votes related to this subject
        const subjectbeforeDeleting = await Subject.findById(req.params.subjectId)
        subjectbeforeDeleting.votes.forEach(async element => {
            await Vote.findByIdAndDelete(element)
        });
        // deleting subject
        const subject = await Subject.findByIdAndDelete(req.params.subjectId)
        res.status(200).json(subject)
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' })
    }
}