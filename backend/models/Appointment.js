const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  patient: String,
  doctor: String,
  date: String,
  status: String
});

module.exports = mongoose.model("Appointment", AppointmentSchema);