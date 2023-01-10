const dotenv = require('dotenv');
const Donation = require('../models/donation');
dotenv.config();

const getDonationsController = async (req,res) => {
    const donations = await Donation.find({})
    res.json(donations)
}

module.exports = getDonationsController;