const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('./src/models/customer')
const schema = require('./src')
const {
  apolloMiddleInterFace,
  apolloMiddle
} = require('./serverMiddle/apolloMiddle')
const keys = require('../config/keys')

mongoose.Promise = global.Promise
mongoose.connect(keys.mongoURI)

const port = process.env.PORT || 8080

const server = express()

server.use(cors())
apolloMiddle(server, schema)
apolloMiddleInterFace(server)

server.listen(port, err => {
  if (err) throw err
  console.log(`> ready on http://localhost:${port}`)
})
