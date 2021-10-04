const cron = require('node-cron')
const User = require('../models/userSchema')
cron.schedule('0 0 * * *', async () => {
    const users = await User.updateMany({}, {
        voteNumber: 5,
    }, {
        multi: true
    })
    console.log("now");
})