var express = require('express')
var app = express()
const PORT=3000;


const bcrypt=require('bcrypt')
var cookieParser = require('cookie-parser')



app.use(cookieParser())

app.get("/",(req,res)=>{
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("kuldeep", salt, function(err, hash) {
      res.cookie("cookie",hash)
      res.send(hash)
      
       });
});



})

app.listen(PORT)
