const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "name":{type:String,require:true},
        "description":{type:String,require:true},
        "rating":{type:String,require:true}
    }
)
let reviewModel=mongoose.model("review",schema)
module.exports={reviewModel}