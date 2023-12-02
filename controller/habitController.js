exports.home=(req,res)=>{
    // res.send("Hello");
    res.render('home');
}

exports.createHabit=(req,res)=>{
    console.log(req.body)
    res.status(200).json(req.body)
}