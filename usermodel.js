const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String
})

// its perform route gate
module.exports = mongoose.model("user", userSchema);