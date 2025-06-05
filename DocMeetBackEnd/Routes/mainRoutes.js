const express = require('express')
let router = express.Router()

const authController = require('../Controllers/authController')
const adminController = require('../Controllers/adminController')

//authRoutes
router.post('/user/signup',authController.userSignUp)
router.post('/user/signin',authController.userSignin)
router.post('/admin/signin',adminController.adminSignin)

//adminRoutes
router.post('/admin/signin',adminController.adminSignin)

module.exports = router