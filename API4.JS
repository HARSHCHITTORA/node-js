const express = require("express");
const mongodb=require('mongodb')
const dbconnect=require('./mongodb.js')

const app=express()

app.use(express.json())

app.delete("/:id",async(req,res)=>{
    console.log(req.params.id)
    const data=await dbconnect();
    const result=data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    res.send(result)
})
app.listen(5000)