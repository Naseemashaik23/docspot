const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  location: {
    type: String,
    default: ""
  },
  approved: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model("Doctor", DoctorSchema);