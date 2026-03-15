const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

// Create appointment
router.post("/book", async (req, res) => {
  try {
    const { patient, doctor, date } = req.body;

    const newAppointment = new Appointment({
      patient,
      doctor,
      date,
      status: "Pending",
    });

    await newAppointment.save();

    res.json({ message: "Appointment booked", newAppointment });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all appointments
router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Doctor approve appointment
router.put("/approve/:id", async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status: "Approved" },
      { new: true }
    );

    res.json(appointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Doctor cancel appointment
router.put("/cancel/:id", async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status: "Cancelled" },
      { new: true }
    );

    res.json(appointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;