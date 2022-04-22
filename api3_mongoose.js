const express=require('express')
require('./config.js')
const items=require('./items.js')

const app=express()

app.delete("/delete/:_id",async (req,res)=>{
    console.log(req.params)
    let data=await items.deleteOne(req.params)
    res.send("done")
})
app.listen(5000)

