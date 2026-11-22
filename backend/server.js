
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5000;

// Import database connection
const db = require("./config/db");

// Import contact routes
const contactRoutes = require("./routes/contactRoutes");

app.use(cors());
app.use(express.json());

// Health check API
app.get("/", (req, res) => {
  res.json({
    message: "Rudra Portfolio Backend is running!"
  });
});

// Contact API
app.use("/api/contact", contactRoutes);

// Start server
app.listen(PORT, async () => {
  console.log(`Backend running on http://localhost:${PORT}`);

  try {
    const connection = await db.getConnection();
    console.log("MySQL Database Connected Successfully!");
    connection.release();
  } catch (error) {
    console.error("MySQL Connection Failed:", error.message);
  }
});
