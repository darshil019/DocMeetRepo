const express = require('express')
let router = express.Router()
const multer = require('multer')

const authController = require('../Controllers/authController')
const adminController = require('../Controllers/adminController')
const userController = require('../Controllers/userController')

//authRoutes
router.post('/user/signup',authController.userSignUp)
router.post('/user/signin',authController.userSignin)
router.post('/admin/signin',adminController.adminSignin)

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './doctorImages/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

//adminRoutes
router.post('/admin/signin',adminController.adminSignin)
router.post('/admin/doctorAdd',upload.single('myfile'),adminController.doctorSignin)

//userRoutes
router.get('/user/getDoctorImages',userController.getDoctorImages)
router.get('/user/getPediatriciansDoctors',userController.getPediatriciansDoctors)
router.get('/user/getDermatologistDoctors',userController.getDermatologistDoctors)

module.exports = router