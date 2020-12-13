const mongoose=require('mongoose');
const config = require('../config/database');
//Vegetable Schema
const VegSchema = mongoose.Schema({
  name: {
    type:String,
    required: true
  },
  planttime:{
    type: String
  },
  harvtime:{
    type: String
  },
  freq:{
    type: String
  },
  neighb:{
    type: String
  },
  ferts:{
    type: String
  },
  sun:{
    type: String
  },
  exps:{
    type: String
  }
});

//Veg is the collection
const Veg = module.exports=mongoose.model('Veg', VegSchema);

module.exports.addVeg = function(newVeg, callback){
  newVeg.save(callback);
}

module.exports.getVegs=function(callback){
  Veg.find(callback);
}

module.exports.getVegByName = function(name,callback){
  const query = {name: name}
  Veg.findOne(query,callback);
}
