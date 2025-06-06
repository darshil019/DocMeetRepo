const fs = require('fs')
const adminSignInModel = require('../Models/adminModel');
const doctorSignInModel = require('../Models/doctorModel');

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
                let doctorSignInData = new doctorSignInModel({
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

module.exports = { adminSignin, doctorSignin };
