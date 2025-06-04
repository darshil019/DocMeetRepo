const adminSignInModel = require('../Models/adminModel');

const adminSignin = (req, res) => {
    let adminSignInData = new adminSignInModel({
        email: req.body.email,
        password: req.body.password,
    });

    

    res.send(adminSignInData); 
};

module.exports = { adminSignin };
