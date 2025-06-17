const express = require('express')
let router = express.Router()
const multer = require('multer')
const jwt = require('jsonwebtoken')

const authController = require('../Controllers/authController')
const adminController = require('../Controllers/adminController')
const userController = require('../Controllers/userController')
const doctorController = require('../Controllers/doctorController')
//jwt verification
const protect = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1]
  if (!token) {
    return res.status(404).send({
      msg: "UserNotAuthorized"
    })
  }
  try {
    const decoded = jwt.verify(token, "abc")
    req.user = decoded
    next()
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
}

//authRoutes
router.post('/user/signup', authController.userSignUp)
router.post('/user/signin', authController.userSignin)
router.post('/user/signupOtp',authController.userSignUpOtp)
router.post('/user/signup',authController.userSignUp)
router.post('/user/signin',authController.userSignin)
router.post('/user/googlesignin', authController.userGoogleSignin)
router.post('/admin/signin', adminController.adminSignin)
router.post('/user/resetpassword', authController.resetpassword)
router.post('/user/verifyotp', authController.verifyotp)
router.post('/user/newpassword', authController.newpassword)

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './doctorImages/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const storage1 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './doctorAddedPrescription/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
const upload1 = multer({ storage: storage1 });

//adminRoutes
router.post('/admin/signin', adminController.adminSignin)
router.post('/admin/doctorAdd', upload.single('myfile'), adminController.doctorSignin)

//userRoutes
router.get('/user/getDoctorImages', userController.getDoctorImages)
router.get('/user/getPediatriciansDoctors', userController.getPediatriciansDoctors)
router.get('/user/getDermatologistDoctors', userController.getDermatologistDoctors)
router.get('/user/getGynecologistDoctors', userController.getGynecologistDoctors)
router.get('/user/getGeneralPhysician', userController.getGeneralPhysician)
router.get('/user/getNeurologist', userController.getNeurologist)
router.get('/user/getGastroenterologist', userController.getGastroenterologist)
router.get('/user/dashboardName', protect, userController.userDashboardName)
router.put('/user/verifiedUser', protect, userController.verifyUser)
router.get('/user/allDoctors', userController.allDoctors)
router.get('/user/partDoc/:_id', userController.partDoc)

//DoctorRoutes
router.post('/doctor/addPrescription', upload1.single('prescriptionImage'),doctorController.addPrescription )

module.exports = router