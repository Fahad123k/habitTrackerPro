const express= require("express");
const app= express();
require("dotenv").config();
const PORT=process.env.PORT||2000;

app.get('/',(req,res)=>{
    res.send("Hello");
})

app.listen(PORT,(err)=>{
    if(err){
        console.log("Some Error occured");
    }
    console.log(`Successfully running on port http://localhost:${PORT}`)
})