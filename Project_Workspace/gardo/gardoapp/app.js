const express = require("express");
const path= require("path");
const bodyParser=require('body-parser');//it parses incoming request body
const cors=require('cors');
const passport=require('passport');
const mongoose=require('mongoose');
const config = require('./config/database');

//Connection to database
mongoose.connect(config.database, { useNewUrlParser: true , useUnifiedTopology: true});

//On Connection
mongoose.connection.on('connected', ()=>{
  console.log('Connected to database '+config.database);
});

//Connection to database (in config) has an error
mongoose.connection.on('erros', (err)=>{
  console.log('Database error:  '+err);
});

//Initializing Express
const app=express();

//Bringing in users folder whith user routes
const users = require('./routes/users');

//Port Number
const port=3000;

//CORS Middleware
app.use(cors()); //npmjs.com/package/cors for more cors

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser Middleware
app.use(bodyParser.json());

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

//Index Route
app.get('/', (requ,res)=>{
  res.send('Invalid Endpoint');
});

//Any other route is send to that
app.get('*', (req,res)=>{
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

//Start Server
app.listen(port, ()=>{
  console.log('Server started on port '+port);
})
