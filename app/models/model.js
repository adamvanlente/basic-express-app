// ******************************************
// Schema for User accounts
// __________________________________________

var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var schemaName = mongoose.Schema({

    param            : Type

});

// Create the model for users and expose it to our app
module.exports = mongoose.model('name', schemaName);
