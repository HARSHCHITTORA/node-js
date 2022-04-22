const express=require('express')
require('./config.js')
const items=require('./items.js')

const app=express()

app.get("/list",async (req,res)=>{
    let data=await items.find()
    res.send(data)
})
app.listen(5000)