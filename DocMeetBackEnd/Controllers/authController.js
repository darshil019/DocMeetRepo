const { userSignUpModel, userSignUpValidation, userSigninValidation } = require('../Models/authModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const userSignUp = (req, res) => {

    const securePass = bcrypt.hashSync(req.body.password, 10)

    let storedSignUpData = new userSignUpModel({
        fullname: req.body.fullname,
        birthday: req.body.birthday,
        email: req.body.email,
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

const userSignin = async (req, res) => {
    const { email, password } = req.body


    if (email && password) {
        const { error } = userSigninValidation.validate({ email: email, password: password }, { allowUnknown: true })
        if(!error){
            const getUserData = await userSignUpModel.findOne({
                email
            })
            try{
                if(getUserData){
                    const checkPass = bcrypt.compareSync(password,getUserData.password)

                    if(checkPass){
                        const token = jwt.sign({email:getUserData.email},
                            "abc",{ expiresIn:'1h'}
                        )
                        res.status(200).send({
                            token:token
                        })
                    }
                    else{
                        res.status(404).send({
                            msg:"Password Error"
                        })
                    }
                }
            }
            catch{
                res.status(404).send({
                    "msg":"Email & Password Not Found"
                })
            }
        }
    }
    else {
        res.send({ "msg": "All Fields Must Be Filled" })
    }
}

module.exports = { userSignUp, userSignin }