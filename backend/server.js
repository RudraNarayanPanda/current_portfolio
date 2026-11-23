
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5000;

const db = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");

// Allowed frontend origins
const allowedOrigins = [
  "https://rudranarayanpanda.netlify.app",
  "http://localhost:5173"
];

// Middleware
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
}));

app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.json({
    message: "Rudra Portfolio Backend is running!"
  });
});

// Contact API
app.use("/api/contact", contactRoutes);

// Start server
app.listen(PORT, "0.0.0.0", async () => {
  console.log(`Backend running on port ${PORT}`);

  try {
    const connection = await db.getConnection();

    console.log("MySQL Database Connected Successfully!");

    connection.release();
  } catch (error) {
    console.error("MySQL Connection Failed:", error.message);
  }
});
