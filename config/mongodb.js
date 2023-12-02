const mongoose = require("mongoose");
require("dotenv").config();
const username=process.env.USER_NAME;
const password=process.env.PASS;
const dbname=process.env.DB;

const mongoURI=`mongodb+srv://${username}:${password}@cluster0.rmhow4g.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(mongoURI)

.then(()=>{
    console.log("Connected to Mongo db");
}).catch((err)=>{
    console.log("Error on connecting MpngoDbAtlas",err)
})

const db=mongoose.connection;
db.on('error',(err)=>{
    console.log("Mongo db Connection Error",err.message)
})

db.on('disconnected',()=>{
    console.log("MongoDb disconnected")
})
module.exports=db;