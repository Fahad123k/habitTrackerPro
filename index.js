const express= require("express");
const app= express();
const bodyParser = require('body-parser');
require("dotenv").config();
const PORT=process.env.PORT||2000;
const db=require('./config/mongodb');
// console.log(username);
// process.exit();

app.set('view engine','ejs')
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',require('./routes/index'))



app.listen(PORT,(err)=>{
    if(err){
        console.log("Some Error occured");
    }
    console.log(`Successfully running on port http://localhost:${PORT}`)
})