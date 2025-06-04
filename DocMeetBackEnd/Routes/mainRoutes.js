const express = require('express')
let router = express.Router()

const authController = require('../Controllers/authController')
const adminController = require('../Controllers/adminController')

//authController SignUp
router.post('/user/signup',authController.userSignUp)
router.post('/user/signin',authController.userSignin)
router.post('/admin/signin',adminController.adminSignin)

module.exports = router