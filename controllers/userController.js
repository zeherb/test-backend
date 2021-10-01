const User = require('../models/userSchema')

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' })
    }
}