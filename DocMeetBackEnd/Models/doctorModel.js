const joi = require('joi');
const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    doctorName:{
        type: String,
        required: true,
    },
    doctorEmail:{
        type: String,
        required: true,
    },
    doctorPassword:{
        type: String,
        required: true,
    },
    doctorExperience:{
        type:Number,
        required:true,
    },
    doctorDegree:{
        type: String,
        required: true,
    },
    doctorAddress:{
        type: String,
        required: true,
    },
    doctorSpeciality:{
        type: String,
        required: true,
    },
    doctorFees:{
        type: Number,
        required: true,
    },
    doctorTimmings:{
        type:{
            doctorStart:{type: String},
            doctorEnd:{type: String}
        }
    },
    doctorAvailableDays: {
        type: [String],
        enum: {
          values: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          message: '{VALUE} is not a valid day'
        },
        required: true
    },
    doctorPhno:{
        type: String,
        required: true
    },
    doctorRating:{
        type: Number,
        required: true,
    },
    doctorImage:{
        type:{
            imgPath : {type:String},
            imgName : {type:String}
        }
    },
    doctorDesc:{
        type: String,
        required: true
    }
});

const prescriptionSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
  },
  patientEmail: {
    type: String,
    required: true,
  },
  additionalInfo: {
    type: String,
    required: true,
  },
  prescriptionPhoto: {
    imgPath: {
      type: String,
      required: true,
    },
    imgName: {
      type: String,
      required: true,
    },
  },
});

const Prescription = mongoose.model('Prescription', prescriptionSchema);
const doctorSigninModel = mongoose.model('Doctor', doctorSchema);
module.exports = {doctorSigninModel,Prescription};