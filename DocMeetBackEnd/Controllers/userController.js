const doctorSignInModel = require('../Models/doctorModel');

const getDoctorImages = async (req,res) => {
    try{
        const getDoctorData = await doctorSignInModel.find({}).select('doctorName doctorImage doctorSpeciality doctorTimmings doctorAvailableDays')
        res.send({
            data:getDoctorData
        })
    }
    catch(err){
        res.send({
            err:err
        })
        console.log(err)
    }
}

const getPediatriciansDoctors = async (req,res) => {
    try{
        const getDoctorData1 = await doctorSignInModel.find({doctorSpeciality:"Pediatricians"})
        res.send({
            data:getDoctorData1
        })
    }
    catch(err){
        res.send({
            err:err
        })
        console.log(err)
    }
}

const getDermatologistDoctors = async (req,res) => {
    try{
        const getDoctorData2 = await doctorSignInModel.find({doctorSpeciality:"Dermatologist"})
        res.send({
            data:getDoctorData2
        })
    }
    catch(err){
        res.send({
            err:err
        })
        console.log(err)
    }
}



module.exports = {getDoctorImages,getPediatriciansDoctors,getDermatologistDoctors}