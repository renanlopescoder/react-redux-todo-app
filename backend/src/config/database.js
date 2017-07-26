const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://renanlopes:openpassword@ds125623.mlab.com:25623/heroku_ck985tw6', { useMongoClient: true } )
