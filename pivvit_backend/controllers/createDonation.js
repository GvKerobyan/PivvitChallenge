const dotenv = require('dotenv');
const Donation = require('../models/donation');
dotenv.config();

const createDonationController = async (req,res) => {
    const donation = await Donation.create(req.body)
    res.json(donation)
}

module.exports = createDonationController;