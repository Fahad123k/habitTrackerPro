const express=require('express');

const router=express.Router();


router.get('/',(req,res)=>{
    // res.send("Hello");
    res.render('home');
})
router.post('/create',(req,res)=>{
    console.log(req.body)
    res.status(200).json(req.body)
})

module.exports=router;