const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
username: String,
userId: String,
message: String,
date: String,
name: String,
starCount: String

})





// const starSchema = new Schema({
    
//     postRatings: String,
//     name: String

// })

// const starUser = mongoose.model('StarUser', starSchema,)

const user = mongoose.model('User', userSchema,)





// module.exports = starUser;
module.exports = user;