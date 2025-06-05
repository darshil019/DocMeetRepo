const adminSignInModel = require('../Models/adminModel');
const doctorSignInModel = require('../Models/doctorModel');

const adminSignin = (req, res) => {
    let adminSignInData = new adminSignInModel({
        email: req.body.email,
        password: req.body.password,
    });



    res.send(adminSignInData);
};

const doctorSignin = async(req, res) => {
    
    
        try{
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
        doctorTimmings: {
            start:req.body.start,
            end:req.body.end
        },
        doctorImage: req.body.doctorImage,
        doctorAvailability: req.body.doctorAvailability,
        doctorPhno: req.body.doctorPhno,
        doctorRating: req.body.doctorRating,
    });
           await doctorSignInData.save()
           res.send({msg:"Doctor Added"})
        }
        catch(err){
            res.send({msg:err})
        }

    
};

module.exports = { adminSignin, doctorSignin };
