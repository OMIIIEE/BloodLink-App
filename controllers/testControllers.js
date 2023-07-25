 const testController=(req,res)=>{
    res.status(200).send({
        message:"WElcome",
        success:true,
    });
};

module.exports={testController};