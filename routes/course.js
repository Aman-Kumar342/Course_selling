const{Router}=require("express");
const courseRouter=Router();



courseRouter.post("/purchases",function(req, res){
    res.json({
        message:"signup endpoint "
    });
})

courseRouter.get("/preview",function(req,res){
    res.json({
        message : "courses preview endpoint"
    })
})

module.exports={
    courseRouter:courseRouter
}