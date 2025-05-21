const { userSignUpModel , userSignUpValidation } = require('../Models/authModel')
const bcrypt = require('bcrypt')


const userSignUp = (req, res) => {

    const securePass = bcrypt.hashSync(req.body.password, 10)

    let storedSignUpData = new userSignUpModel({
        fullname: req.body.fullname,
        birthday : req.body.birthday,
        email:req.body.email,
        password: req.body.password,
    })

    const { error, value } = userSignUpValidation.validate(storedSignUpData, { allowUnknown: true })
    if (!error) {
        storedSignUpData.password = securePass
        storedSignUpData.save()
        .then(() => {
            res.send({ isSuccess: true, msg: "Added User Data Succssfully" })
        })
        .catch((err) => {
            res.send({ isSuccess: false, msg: "Added in creating user" })
        })
    }
    else {
        res.send({
            msg: error.details[0].message
        })
    }
}


module.exports = { userSignUp }