const fs = require('fs')
const adminSignInModel = require('../Models/adminModel');
const { doctorSigninModel } = require('../Models/doctorModel');

const adminSignin = (req, res) => {
    let adminSignInData = new adminSignInModel({
        email: req.body.email,
        password: req.body.password,
    });
    res.send(adminSignInData);
};

const doctorSignin = async (req, res) => {
    try {
        fs.readFile(req.file.path, async (err, data) => {
            if (!err) {
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
                    doctorAvailableDays: JSON.parse(req.body.doctorAvailableDays),
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

const getDoctorById = async (req, res) => {
  try {
    const doctor = await doctorSigninModel.findById(req.params.id);
    if (!doctor) {
      return res.status(404).json({ msg: "Doctor not found" });
    }
    res.status(200).json(doctor); // ✅ return whole doc, including nested fields
  } catch (err) {
    res.status(500).json({ msg: "Failed to get doctor", error: err.message });
  }
};


const getDoctors = async (req, res) => {
    try {
        const doctors = await doctorSigninModel.find({}, {
            doctorName: 1,
            doctorEmail: 1,
            doctorDegree: 1,
            doctorSpeciality: 1,
            doctorFees: 1,
            _id: 1
        });
        res.json(doctors);
    } catch (err) {
        res.status(500).json({ msg: "Failed to fetch doctors", error: err });
    }
};

const deleteDoctor = async (req, res) => {
    try {
        const doctorId = req.params.id;
        await doctorSigninModel.findByIdAndDelete(doctorId);
        res.status(200).send({ msg: "Doctor deleted successfully" });
    } catch (err) {
        res.status(500).send({ msg: "Failed to delete doctor", error: err });
    }
};
const updateDoctor = async (req, res) => {
    try {
        console.log("Incoming body:", req.body);
        console.log("Incoming file:", req.file);

        const doctorTimmings = typeof req.body.doctorTimmings === 'string' 
            ? JSON.parse(req.body.doctorTimmings) 
            : req.body.doctorTimmings;

        const doctorAvailableDays = typeof req.body.doctorAvailableDays === 'string' 
            ? JSON.parse(req.body.doctorAvailableDays) 
            : req.body.doctorAvailableDays;

        const updatedFields = {
            doctorName: req.body.doctorName,
            doctorEmail: req.body.doctorEmail,
            doctorPassword: req.body.doctorPassword,
            doctorExperience: req.body.doctorExperience,
            doctorDesc: req.body.doctorDesc,
            doctorDegree: req.body.doctorDegree,
            doctorAddress: req.body.doctorAddress,
            doctorSpeciality: req.body.doctorSpeciality,
            doctorFees: req.body.doctorFees,
            doctorAvailableDays,
            doctorTimmings,
            doctorPhno: req.body.doctorPhno,
            doctorRating: req.body.doctorRating,
            slotDuration: req.body.slotDuration
        };

        if (req.file) {
            updatedFields.doctorImage = {
                imgPath: `http://localhost:5001/doctorImages/${req.file.originalname}`,
                imgName: req.file.originalname
            };
        }

        const updatedDoctor = await doctorSigninModel.findByIdAndUpdate(
            req.params.id,
            updatedFields,
            { new: true }
        );

        if (!updatedDoctor) {
            return res.status(404).send({ msg: "Doctor not found" });
        }

        res.status(200).send({ msg: "Doctor updated successfully", data: updatedDoctor });
    } catch (err) {
        console.error('Update error:', err);
        res.status(500).send({ msg: "Failed to update doctor", error: err.message });
    }
};

module.exports = { adminSignin, doctorSignin, getDoctors, deleteDoctor, updateDoctor, getDoctorById };
