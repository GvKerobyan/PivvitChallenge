
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const donationSchema = new Schema({
    campaign_title:{
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: false
    },
    donor_name: {
      type: String,
      required: true
    }
  })
module.exports =  mongoose.model('Donation', donationSchema);