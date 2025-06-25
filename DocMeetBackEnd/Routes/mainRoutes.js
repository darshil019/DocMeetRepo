const express = require('express')
let router = express.Router()
const multer = require('multer')
const jwt = require('jsonwebtoken')

const authController = require('../Controllers/authController')
const adminController = require('../Controllers/adminController')
const userController = require('../Controllers/userController')
const doctorController = require('../Controllers/doctorController')

//jwt verification User
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
    console.log(req.user)
    next()
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
}

//jwt verification Doctor
const protect1 = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1]
  if (!token) {
    return res.status(404).send({
      msg: "UserNotAuthorized"
    })
  }
  try {
    const decoded = jwt.verify(token, "abc")
    req.doctor = decoded
    next()
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
}

//authRoutes
router.post('/user/signup', authController.userSignUp)
router.post('/user/signin', authController.userSignin)
router.post('/user/signupOtp', authController.userSignUpOtp)
router.post('/user/signup', authController.userSignUp)
router.post('/user/signin', authController.userSignin)
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

const storage2 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});


const storage3 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads1/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});


const upload = multer({ storage: storage });
const upload1 = multer({ storage: storage1 });
const upload2 = multer({ storage: storage2 });
const upload3 = multer({ storage: storage3 });
//adminRoutes
router.post('/admin/signin', adminController.adminSignin)
router.post('/admin/doctorAdd', upload.single('myfile'), adminController.doctorSignin)
router.get('/admin/getDoctors', adminController.getDoctors);
router.delete('/admin/deleteDoctor/:id', adminController.deleteDoctor)
router.put('/admin/updateDoctor/:id', upload.single('myfile'), adminController.updateDoctor);
router.get('/admin/getDoctor/:id', adminController.getDoctorById);
router.post('/admin/adddepartment', upload3.single('myfile'), adminController.addDepartment);
router.get('/admin/getdepartment',adminController.getdepartment);
router.delete('/admin/deleteDepartment/:id',adminController.deleteDepartment)
router.get('/admin/getdepartment/:id', adminController.getSingleDepartment);
router.put('/admin/editdepartment/:id',upload.single('myfile'),adminController.editDepartment);

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
router.get('/user/getUser', protect, userController.getUser)
router.put('/user/updateUserProfile', upload2.single('myfile'), userController.updateUserProfile);
router.post('/user/appintmentBooking', userController.bookAppointment)
router.get('/user/getUserAppointments/:_id', protect, userController.getUserAppointments)
router.get('/user/appointmentShowForHide',userController.getAppointmentsForHide)

//DoctorRoutes
router.post('/doctor/addPrescription', upload1.single('prescriptionImage'), doctorController.addPrescription)
router.post('/doctor/addMedicine', doctorController.addMedicine);
router.post('/doctor/signin', authController.doctorSignin)
router.get('/doctor/doctordashboardName', protect1, doctorController.doctorDashboardName)
router.get('/doctor/getAppointments', protect1, doctorController.getAppointments)
router.get('/doctor/getAppointmentstoday', protect1, doctorController.getAppointmentsToday)
router.put('/doctor/updatestatuspostive', protect1, doctorController.updatestatuspostive)
router.put('/doctor/updatestatusnegative', protect1, doctorController.updatestatusnegative)

module.exports = router