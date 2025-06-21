const {Prescription,MedicineModel,doctorSigninModel} = require("../Models/doctorModel");
const {appointmentModel} = require("../Models/appointmentModel")
const addPrescription = async (req, res) => {
  try {
    const { patientName, patientEmail, additionalInfo } = req.body;
    const file = req.file;

    if (!file) {
      return res.status(400).json({ msg: "No file uploaded" });
    }

    const newPrescription = new Prescription({
      patientName,
      patientEmail,
      additionalInfo,
      prescriptionPhoto: {
        imgPath: `http://localhost:5001/doctorAddedPrescriptions/${file.originalname}`,
        imgName: file.originalname,
      },
    });

    await newPrescription.save();
    res.status(201).json({ msg: "Prescription added successfully", data: newPrescription });
  } catch (error) {
    res.status(500).json({ msg: "Something went wrong", error });
  }
};

const addMedicine = async (req, res) => {
  try {
    const { medicineName, medicineInfo } = req.body;

    if (!medicineName || !medicineInfo) {
      return res.status(400).json({ msg: "Both medicineName and medicineInfo are required" });
    }

    const newMedicine = new MedicineModel({ medicineName, medicineInfo });
    await newMedicine.save();

    res.status(201).json({ msg: "Medicine added successfully", data: newMedicine });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ msg: "Something went wrong", error });
  }
};

const doctorDashboardName = async (req, res) => {
  const doctor = await doctorSigninModel.findOne({ doctorEmail: req.doctor.doctorEmail });
  try {
      if (doctor) {
          res.send({
              doctor
          })
      }
  } catch {
      res.send({
          msg: "NotFound"
      })
  }
}

const getAppointments = async (req,res) => {
  let date = new Date();
  let dateNumber = date.getDate();
  let monthName = date.toLocaleString('default', { month: 'short' });

  let fullDate = dateNumber + " " + monthName;
  const getAppointmentsDetails = await appointmentModel.find({ doctorID: req.doctor._id,slotDate: { $gt: fullDate } }).populate("doctorID").populate("userID")
  try{
    if(getAppointmentsDetails){
      res.send({
          appointments:getAppointmentsDetails
      })
    }
  }catch {
    res.send({
        appointments: "NotFound"
    })
}
}

const getAppointmentsToday = async (req,res) => {
  let date = new Date();
  let dateNumber = date.getDate();
  let monthName = date.toLocaleString('default', { month: 'short' });

  let fullDate = dateNumber + " " + monthName;
  const getAppointmentsDetails = await appointmentModel.find({ doctorID: req.doctor._id,slotDate: { $eq: fullDate } }).populate("doctorID").populate("userID")
  try{
    if(getAppointmentsDetails){
      res.send({
          appointments:getAppointmentsDetails
      })
    }
  }catch {
    res.send({
        appointments: "NotFound"
    })
}
}

const updatestatuspostive = async (req,res) => {
  const {userID,doctorID,slotTime,slotDay,slotDate,status} = req.body
  try{
    const updateResult = await appointmentModel.updateOne({
      userID:userID,
      doctorID:doctorID,
      slotTime:slotTime,
      slotDay:slotDay,
      slotDate:slotDate
    },{ $set: { status: status } })

    if (updateResult.modifiedCount > 0) {
      res.send({ msg: "StatusUpdated" });
    } else {
      res.send({ msg: "Appointment not found or already updated" });
    }
  }
  catch{
    res.send({
      msg:"NotStatusUpdated"
  })
  }
}

const updatestatusnegative = async (req,res) => {
  const {userID,doctorID,slotTime,slotDay,slotDate,status} = req.body
  try{
    const updateResult = await appointmentModel.updateOne({
      userID:userID,
      doctorID:doctorID,
      slotTime:slotTime,
      slotDay:slotDay,
      slotDate:slotDate
    },{ $set: { status: status } })

    if (updateResult.modifiedCount > 0) {
      res.send({ msg: "StatusUpdated" });
    } else {
      res.send({ msg: "Appointment not found or already updated" });
    }
  }
  catch{
    res.send({
      msg:"NotStatusUpdated"
  })
  }
}


module.exports = { addPrescription,addMedicine,doctorDashboardName,getAppointments,updatestatuspostive,updatestatusnegative,getAppointmentsToday};
