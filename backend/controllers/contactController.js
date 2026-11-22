
const db = require("../config/db");

const saveContact = async (req, res) => {
  try {
    const { name, mobile, reason } = req.body;

    // Validate incoming data
    if (!name || !mobile || !reason) {
      return res.status(400).json({
        success: false,
        message: "Please provide name, mobile number and reason."
      });
    }

    // Insert contact details into MySQL
    const sql = `
      INSERT INTO portfolio_records (name, mobile, reason)
      VALUES (?, ?, ?)
    `;

    const [result] = await db.execute(sql, [
      name.trim(),
      String(mobile).trim(),
      reason.trim()
    ]);

    return res.status(201).json({
      success: true,
      message: "Contact saved successfully!",
      contactId: result.insertId
    });

  } catch (error) {
    console.error("Contact API Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to save contact details."
    });
  }
};

module.exports = { saveContact };
