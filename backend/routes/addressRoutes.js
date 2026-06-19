const express = require("express");

const {
  addAddress,
  getAddresses,
} = require("../controllers/addressController");

const router = express.Router();

router.post("/", addAddress);

router.get("/", getAddresses);

module.exports = router;