const express = require('express')
const morgan = require('morgan')
const connect = require('./database/connect')
const bearerStratigy = require('./strategy/bearerStrategy')
const cors = require("cors");

const authRoute = require('./routes/authentificationRoute')
const subjectRoute = require('./routes/subjectRoute')
const voteRoute = require('./routes/voteRoute')
const userRoute = require('./routes/userRoute')

const app = express()
// morgan config
app.use(morgan('dev'))
// parse application/json
app.use(express.json())
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
// cors
app.use(cors());


// routes
app.use('/auth', authRoute)
app.use('/subject', subjectRoute)
app.use('/vote', voteRoute)
app.use('/user', userRoute)
const cronRoute = require('./routes/resetUsersVoteRoute')

// dotenv config
require('dotenv').config()
// port config
const port = 3000

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' })
})

app.listen(port, () => {
    console.log(`Application listening at http://localhost:${port}`)
})