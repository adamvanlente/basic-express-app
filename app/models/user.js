// // ******************************************
// // Schema for User accounts
// // __________________________________________

var mongoose = require('mongoose');

// Mongoose schema so Mongoose can make effective queries
var userSchema = new mongoose.Schema({
    email : {
        type: String,
        index: {
            unique: true,
            required: true
        }
    },
    name: {
        type: String
    }
});

var ExportingUser = function() {

    // Declare a model
    var _model = mongoose.model('user', userSchema);

    // Creating a register method for convenience
    var _createNew = function(email, name, callback){
        _model.create({ email: email, name: name }, function(err, doc){
            if(err) {
                fail(err);
            } else {
                callback(doc);
            }
        });
    };

    // Creating a findByEmail method for convenience
    var _findByEmail = function(email, success, fail){
        _model.findOne({ email: email }, function(err, doc){
            if(err) {
                fail(err);
            } else {
                success(doc);
            }
        });
    }

    // Return new Schema object.
    return {
        createNew: _createNew,
        schema: userSchema,
        model: _model,
        findByEmail: _findByEmail
    }
}();

// module.exports = User;
module.exports = ExportingUser;
