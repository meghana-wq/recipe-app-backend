const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
app.use(cors())

const recipes  = require("./models/recipe")
const {recipeModel}=require("./models/recipe")

app.use(express.json())
mongoose.connect("mongodb+srv://pachu123:pachu000@cluster0.bd7lkke.mongodb.net/recipedb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add", (req, res) => {
    let input = req.body
    let recipe=new recipeModel(input)
    //console.log(recipe)
    //console.log(input)
    // res.send("Add page")
    recipe.save()
    res.json({ "status": "success" })
})


app.get("/add", (req, res) => {
    res.send("add page")
})
app.post("/view", (req, res) => {
    recipeModel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch((error)=>{
        res.json(error)
    }
)
    //res.send("view page")
})


app.post("/search", (req, res) => {
   // res.send("add search")
   let input=req.body
   recipeModel.find(input).then(
    (data)=>{
        res.json(data)
    }
).catch((error)=>{
    res.json(error)
}
)
})

app.listen(8080, () => {
    console.log("server started")
})