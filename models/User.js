const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
username: String,
userId: String,
message: String,
date: String,
rating: String
})

const user = mongoose.model('User', userSchema,)

module.exports = user;