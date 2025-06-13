const doctorSignInModel = require('../Models/doctorModel');
const {userSignUpModel} = require('../Models/authModel')

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

const getGynecologistDoctors = async (req,res) => {
    try{
        const getDoctorData3 = await doctorSignInModel.find({doctorSpeciality:"Gynecologist"})
        res.send({
            data:getDoctorData3
        })
    }
    catch(err){
        res.send({
            err:err
        })
        console.log(err)
    }
}

const getGeneralPhysician = async (req,res) => {
    try{
        const getDoctorData4 = await doctorSignInModel.find({doctorSpeciality:"General Physician"})
        res.send({
            data:getDoctorData4
        })
    }
    catch(err){
        res.send({
            err:err
        })
        console.log(err)
    }
}

const getNeurologist = async (req,res) => {
    try{
        const getDoctorData5 = await doctorSignInModel.find({doctorSpeciality:"Neurologist"})
        res.send({
            data:getDoctorData5
        })
    }
    catch(err){
        res.send({
            err:err
        })
        console.log(err)
    }
}

const getGastroenterologist = async (req,res) => {
    try{
        const getDoctorData6 = await doctorSignInModel.find({doctorSpeciality:"Gastroenterologist"})
        res.send({
            data:getDoctorData6
        })
    }
    catch(err){
        res.send({
            err:err
        })
        console.log(err)
    }
}

const userDashboardName = async (req,res) => {
    const user = await userSignUpModel.findOne({email:req.user.email});
    try{
        if(user){
            res.send({
                user
            })
        }
    }catch{
        res.send({
            msg:"NotFound"
        })
    }
}

const verifyUser = async (req,res) => {
    userSignUpModel.updateOne({email:req.user.email},req.body)
    .then((data)=>{
        console.log(data)
        res.send({msg:"Update Data Successfully"})
    })
    .catch((err)=>{
        console.log(err)
    })
}



module.exports = {getDoctorImages,getPediatriciansDoctors,getDermatologistDoctors,getGynecologistDoctors,getGeneralPhysician,getNeurologist,getGastroenterologist,userDashboardName,verifyUser}