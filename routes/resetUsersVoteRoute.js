const cron = require('node-cron')
const User = require('../models/userSchema')
cron.schedule('29 16 * * *', async () => {
    const users = await User.updateMany({}, {
        voteNumber: 5,
    }, {
        multi: true
    })
    console.log("now");
})