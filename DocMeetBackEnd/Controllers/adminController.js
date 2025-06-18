const fs = require('fs')
const adminSignInModel = require('../Models/adminModel');
const {doctorSigninModel} = require('../Models/doctorModel');

const adminSignin = (req, res) => {
    let adminSignInData = new adminSignInModel({
        email: req.body.email,
        password: req.body.password,
    });
    res.send(adminSignInData);
};

const doctorSignin = async (req, res) => {
    try {
        fs.readFile(req.file.path, async (err,data)=>{
            if(!err){
                let doctorSignInData = new doctorSigninModel({
                    doctorName: req.body.doctorName,
                    doctorEmail: req.body.doctorEmail,
                    doctorPassword: req.body.doctorPassword,
                    doctorExperience: req.body.doctorExperience,
                    doctorDesc: req.body.doctorDesc,
                    doctorDegree: req.body.doctorDegree,
                    doctorAddress: req.body.doctorAddress,
                    doctorSpeciality: req.body.doctorSpeciality,
                    doctorFees: req.body.doctorFees,
                    doctorAvailableDays : JSON.parse(req.body.doctorAvailableDays),
                    doctorTimmings: {
                        doctorStart: req.body.doctorStart,
                        doctorEnd: req.body.doctorEnd
                    },
                    doctorImage: {
                        imgPath: `http://localhost:5001/doctorImages/${req.file.originalname}`,
                        imgName: req.file.originalname
                    },
                    doctorPhno: req.body.doctorPhno,
                    doctorRating: req.body.doctorRating,
                    slotDuration: req.body.slotDuration
                });
                await doctorSignInData.save()
                res.send({ msg: "Doctor Added" })
            }
        })
    }
    catch (err) {
        res.send({ msg: err })
    }
};

const getDoctors = async (req, res) => {
    try {
        const doctors = await doctorSigninModel.find({}, {
            doctorName: 1,
            doctorEmail: 1,
            doctorDegree: 1,
            doctorSpeciality: 1,
            _id: 0 
        });
        res.json(doctors);
    } catch (err) {
        res.status(500).json({ msg: "Failed to fetch doctors", error: err });
    }
};


module.exports = { adminSignin, doctorSignin, getDoctors };
