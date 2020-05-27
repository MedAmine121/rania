const express=require("express")
const app=express()
const bodyParser=require("body-parser")
const ejs=require("ejs")
const cookieSession=require("cookie-session")
const mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
app.use("view engine",ejs)
app.use(express.static('public'))
app.use(cookieSession({
  name: 'session',
  keys: [rania],

  
  maxAge: 24 * 60 * 60 * 1000*30 
}))
app.get("/",(req,res)=>{

	res.render("index.ejs",{message:"Hello world"})
})