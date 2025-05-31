const express = require('express')
let router = express.Router()

const authController = require('../Controllers/authController')

//authController SignUp
router.post('/user/signup',authController.userSignUp)
router.post('/user/signin',authController.userSignin)

module.exports = router