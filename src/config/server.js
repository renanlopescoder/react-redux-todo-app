const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const port = process.env.PORT || 3000;

server.use(bodyParser.urlencoded( { extended: true } ))
server.use(bodyParser.json())
server.use(allowCors)
server.use(allowCors({origin: '*'}));

server.listen(port, function(){
  console.log(`backend server is running on port ${port}.`)
})

module.exports = server