const mongoose=require('mongoose');

const HabitSchema=mongoose.Schema({
    habit:{
        type:String,
        require:true
    },
    status:{
        type:String,
        default:"None"
    }

},{
timeStampt:true
})

const Habit =mongoose.model("Habit",HabitSchema);
module.exports=Habit;