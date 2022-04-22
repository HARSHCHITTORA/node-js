const express=require('express')
require('./config.js')
const items=require('./items.js')

const app=express()
app.use(express.json())

app.put("/update/:_id",async (req,res)=>{
    console.log(req.params) 
    let data=await items.updateOne(
        req.params,
        {
            $set: req.body
        }
    )
     res.send(data)
})
app.listen(5000)

