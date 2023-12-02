const express=require('express');
const router=express.Router();
const habitController=require('../controller/habitController')


router.get('/',habitController.home);
router.post('/create',habitController.createHabit);

module.exports=router;