const {Prescription} = require("../Models/doctorModel");

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

module.exports = { addPrescription };
