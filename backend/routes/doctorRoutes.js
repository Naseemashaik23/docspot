const express = require("express")
const router = express.Router()
const Doctor = require("../models/Doctor")

// Get all doctors
router.get("/", async (req, res) => {
    const doctors = await Doctor.find({ approved: true })
    res.json(doctors)
})

// Add new doctor
router.post("/add", async (req, res) => {
    const doctor = new Doctor(req.body)
    await doctor.save()
    res.json("Doctor Added Successfully")
})

module.exports = router