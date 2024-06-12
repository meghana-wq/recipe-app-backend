const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const app=express()
const app.use(cors())

app.get("/add",(req,res)=>{
    res.send("add page")
})