
const express = require("express");
const router = express.Router();

const { saveContact } = require("../controllers/contactController");

// POST API to save contact details
router.post("/", saveContact);

module.exports = router;
