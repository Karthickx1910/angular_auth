const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({

    email: String,
    password: String
    // email: {
    //     type: String
    //     // required: [true, "Email is required"],
    //     // match: /	^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
    // },

    // password: {
    //     type: String
    //     //required: true,
    // }
});


const user = mongoose.model('user', userSchema);
module.exports = user;