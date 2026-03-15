const express = require("express");
const router = express.Router();
const Doctor = require("../models/Doctor");

// ADD DOCTOR
router.post("/add", async (req, res) => {
  try {
    const { name, specialization, location } = req.body;

    const newDoctor = new Doctor({
      name,
      specialization,
      location,
      approved: true
    });

    await newDoctor.save();

    res.json({ message: "Doctor added successfully" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
});


// GET ALL DOCTORS
router.get("/", async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;