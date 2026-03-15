const mongoose = require("mongoose");
const Doctor = require("./models/Doctor");

mongoose.connect("mongodb://127.0.0.1:27017/docspot")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const doctors = [
  { name: "Dr Smith", specialization: "Cardiologist", location: "Hyderabad", approved: true },
  { name: "Dr Emily", specialization: "Pediatrician", location: "Bangalore", approved: true },
  { name: "Dr Johnson", specialization: "Dermatologist", location: "Chennai", approved: true },
  { name: "Dr Mark", specialization: "Orthopedic", location: "Mumbai", approved: true },
];

Doctor.insertMany(doctors)
  .then(() => { console.log("Doctors seeded"); mongoose.connection.close(); })
  .catch(err => console.log(err));