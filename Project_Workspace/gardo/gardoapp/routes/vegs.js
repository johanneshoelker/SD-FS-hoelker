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

//Get request to see all vegetables in one list
router.get('/seevegs', (req,res,next)=> {
  const name = req.body.name;
  Veg.getVegs((err,vegs)=>{
    res.json(vegs);      //das hier gibt die get request aus
  })
});

//Get request for seeing one specific vegetable
router.get('/seeveg', (req,res,next)=> {
  const name = req.body.name;
  Veg.getVegByName(name, (err,veg)=>{
    res.json(veg);      //das hier gibt die get request aus
  })
});

module.exports = router;
