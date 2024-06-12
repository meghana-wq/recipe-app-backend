const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const app=express()
 app.use(cors())

app.get("/add",(req,res)=>{
    res.send("add page")
})
app.listen(8080,()=>{
    console.log("server started")
})