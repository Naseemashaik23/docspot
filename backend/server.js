const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");
const doctorRoutes = require("./routes/doctors");
const appointmentRoutes = require("./routes/appointments");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/docspot")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Routes
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use("/doctors", doctorRoutes);
app.use("/appointments", appointmentRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("DocSpot Backend Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});