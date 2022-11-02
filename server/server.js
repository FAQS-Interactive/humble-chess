const path = require('path')
const express = require('express')

const welcome = require('./routes/welcome')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/', welcome)

module.exports = server
