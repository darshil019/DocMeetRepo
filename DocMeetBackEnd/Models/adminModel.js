const { types } = require('joi');
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    }
});

const adminSignInModel = mongoose.model('Admin', adminSchema);
module.exports = adminSignInModel;