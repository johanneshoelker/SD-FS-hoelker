const express = require('express');
const router = express.Router();
const jwt=require('jsonwebtoken');
const config = require('../config/database');
const Veg=require('../models/veg');

//Adding a vegetable to the backend server
router.post('/addveg', (req,res,next)=> {
  let newVeg = new Veg({
    name: req.body.name,
    plantdate:req.body.plantdate,
    harvdate: req.body.harvdate
  });
  Veg.addVeg(newVeg, (err,veg)=>{
    if(err){
      res.json({success: false, msg:'Failed to add Vegetable.'});
    } else{
      res.json({success: true, msg:'Vegetable added.'});
    }
  });
});

//Get request for seeing vegetables
router.get('/seeveg', (req,res,next)=> {
  //res.json({veg:req.veg});
  res.send('SEE VEG');
});
module.exports = router;
