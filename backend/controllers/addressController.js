const Address = require("../models/Address");

// Add Address
const addAddress = async (req, res) => {
  try {
    const address = await Address.create(req.body);

    res.status(201).json({
      success: true,
      address,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Addresses
const getAddresses = async (req, res) => {
  try {
    const addresses = await Address.find();

    res.status(200).json(addresses);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addAddress,
  getAddresses,
};