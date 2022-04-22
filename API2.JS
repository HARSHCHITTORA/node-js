// const { response } = require("express");
const express = require("express");
const dbconnect=require('./mongodb.js')

const app=express()

app.use(express.json())

app.post('/',async (req,res)=>{
    
    let data=await dbconnect()
    let result=await data.insertOne(req.body)
    res.send(result)

})

app.listen(5000)


