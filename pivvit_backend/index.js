const express = require('express');
const cors = require('cors');
const app = express().use('*', cors());

const dotenv = require('dotenv');
dotenv.config();

const mongoConnect = require('./config/mongo');``
const createDonationController = require('./controllers/createDonation');
const getDonationsController = require('./controllers/getDonationsController');

const port = process.env.PORT || 8000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.post('/api/donations', createDonationController)
app.get('/api/donations', getDonationsController)


  const initApp = async () =>{
    try{
      await mongoConnect();
      console.log("DB connection established");
      app.listen(port,()=>console.log(`HTTP Server listening on ${port}`));
    }catch (e) {
      throw e;
    }
  }
  
  initApp().catch(err => console.log(`Error on startup! ${err}`));