const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "name":{type:String,require:true},
        "description":{type:String,require:true},
        "rating":{type:String,require:true}
    }
)
let recipeModel=mongoose.model("recipe",schema)
module.exports={recipeModel}