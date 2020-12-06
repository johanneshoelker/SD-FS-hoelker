const mongoose=require('mongoose');
const config = require('../config/database');
const bcrypt=require('bcryptjs');
//Vegetable Schema
const VegSchema = mongoose.Schema({
  name: {
    type:String
  },
  plantdate:{
    type: String,
    required: true
  },
  harvdate:{
    type: String,
    required: true
  }
});

const Veg = module.exports=mongoose.model('Veg', VegSchema);

module.exports.addVeg = function(newVeg, callback){

  newVeg.save(callback);

}
