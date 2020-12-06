const express = require('express');
const router = express.Router();
const passport=require('passport');
const jwt=require('jsonwebtoken');
const config = require('../config/database');
const User=require('../models/user');

//Setting all URLS that are needed for managing user profiles
//Register
router.post('/register', (req,res,next)=> {
  let newUser = new User({
    name: req.body.name,
    email:req.body.email,
    username: req.body.username,
    password: req.body.password
  });
  User.addUser(newUser, (err,user)=>{
    if(err){
      res.json({success: false, msg:'Failed to register user'});
    } else{
      res.json({success: true, msg:'User registered'});
    }
  });
});

//Authenticate
router.post('/authenticate', (req,res,next)=> {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user)=>{
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    }
    User.comparePassword(password, user.password, (err, isMatch)=>{
      if(err) throw err;
      if (isMatch) {//when the password is right
        const token = jwt.sign({data: user}, config.secret, {//creates a token (after successful login) which has to stored on local storage or in cookies
          expiresIn: 604800// expires in 1 week
        });
        res.json({
          success:true,
          token:'JWT '+token,
          user:{
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      } else{//when the password is wrong
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

//Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req,res,next)=> {
  res.json({user:req.user});
});


module.exports = router;
