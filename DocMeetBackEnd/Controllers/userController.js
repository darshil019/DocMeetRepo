const { doctorSigninModel } = require('../Models/doctorModel');
const { userSignUpModel } = require('../Models/authModel')
const mongoose = require('mongoose');


// controllers/userController.js
const admin = require("firebase-admin");
const getFullUserData = async (req, res) => {
    const email = req.user.email;
    if (!email) {
        return res.status(400).json({ isSuccess: false, msg: "Email is required in query" });
    }

    try {
        // Fetch user by email
        const user = await userSignUpModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ isSuccess: false, msg: "User not found" });
        }

        res.status(200).json({
            isSuccess: true,
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email,
                picture: user.picture,
                loginMethod: user.loginMethod,
                userBirthDay: user.userBirthDay,
            },
        });
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ isSuccess: false, msg: "Server error" });
    }
};

const getDoctorImages = async (req, res) => {
    try {
        const getDoctorData = await doctorSigninModel.find({}).select('doctorName doctorImage doctorSpeciality doctorTimmings doctorAvailableDays')
        res.send({
            data: getDoctorData
        })
    }
    catch (err) {
        res.send({
            err: err
        })
        console.log(err)
    }
}

const getPediatriciansDoctors = async (req, res) => {
    try {
        const getDoctorData1 = await doctorSigninModel.find({ doctorSpeciality: "Pediatricians" })
        res.send({
            data: getDoctorData1
        })
    }
    catch (err) {
        res.send({
            err: err
        })
        console.log(err)
    }
}

const getDermatologistDoctors = async (req, res) => {
    try {
        const getDoctorData2 = await doctorSigninModel.find({ doctorSpeciality: "Dermatologist" })
        res.send({
            data: getDoctorData2
        })
    }
    catch (err) {
        res.send({
            err: err
        })
        console.log(err)
    }
}

const getGynecologistDoctors = async (req, res) => {
    try {
        const getDoctorData3 = await doctorSigninModel.find({ doctorSpeciality: "Gynecologist" })
        res.send({
            data: getDoctorData3
        })
    }
    catch (err) {
        res.send({
            err: err
        })
        console.log(err)
    }
}

const getGeneralPhysician = async (req, res) => {
    try {
        const getDoctorData4 = await doctorSigninModel.find({ doctorSpeciality: "General Physician" })
        res.send({
            data: getDoctorData4
        })
    }
    catch (err) {
        res.send({
            err: err
        })
        console.log(err)
    }
}

const getNeurologist = async (req, res) => {
    try {
        const getDoctorData5 = await doctorSigninModel.find({ doctorSpeciality: "Neurologist" })
        res.send({
            data: getDoctorData5
        })
    }
    catch (err) {
        res.send({
            err: err
        })
        console.log(err)
    }
}

const getGastroenterologist = async (req, res) => {
    try {
        const getDoctorData6 = await doctorSigninModel.find({ doctorSpeciality: "Gastroenterologist" })
        res.send({
            data: getDoctorData6
        })
    }
    catch (err) {
        res.send({
            err: err
        })
        console.log(err)
    }
}

const userDashboardName = async (req, res) => {
    const user = await userSignUpModel.findOne({ email: req.user.email });
    try {
        if (user) {
            res.send({
                user
            })
        }
    } catch {
        res.send({
            msg: "NotFound"
        })
    }
}

const verifyUser = async (req, res) => {
    userSignUpModel.updateOne({ email: req.user.email }, req.body)
        .then((data) => {
            console.log(data)
            res.send({ msg: "Update Data Successfully" })
        })
        .catch((err) => {
            console.log(err)
        })
}

const allDoctors = async (req, res) => {
    try {
        const getAllDoctorData = await doctorSigninModel.find()
        res.send({
            data: getAllDoctorData
        })
    }
    catch (err) {
        res.send({
            err: err
        })
        console.log(err)
    }
}

const partDoc = async (req, res) => {
    const { _id } = req.params;
    const objectId = new mongoose.Types.ObjectId(_id);
    console.log(_id)
    try {
        const user = await doctorSigninModel.findById(objectId)
        if (user) {
            console.log(user)
            res.send({
                data: user
            })
        }
    } catch (err) {
        res.send({
            err: err
        })
        console.log(err)
    }
}

const updateUserProfile = async (req, res) => {
  try {
    const email = req.query.email?.trim()?.toLowerCase(); // sanitize email
    const { fullname, userBirthDay } = req.body;

    const updateFields = {
      fullname,
      userBirthDay: new Date(userBirthDay), // convert string to date
    };

    console.log('Body:', req.body);
    console.log('Birthday type:', typeof userBirthDay);

    if (req.file) {
      updateFields.picture = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
    }

    const updatedUser = await userSignUpModel.findOneAndUpdate(
      { email: { $regex: new RegExp(`^${email}$`, 'i') } }, 
      { $set: updateFields },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User updated", user: updatedUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Update failed" });
  }
};




module.exports = { updateUserProfile, getDoctorImages, getPediatriciansDoctors, getDermatologistDoctors, getGynecologistDoctors, getGeneralPhysician, getNeurologist, getGastroenterologist, userDashboardName, verifyUser, allDoctors, partDoc, getFullUserData }