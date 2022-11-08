const express = require('express')
const cors = require('cors')

require('dotenv').config()

const mongoConfig = require('./config')

const app = express()

const PORT = 8080

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
    mongoConfig()
})