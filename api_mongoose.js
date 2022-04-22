const express=require('express')
require('./config.js')
const items=require('./items.js')

const app=express()
app.use(express.json())
app.post("/create",async (req,res)=>{
//     console.log(req.body)
// res.send("Done")

let data=new items(req.body)
let result=await data.save()
res.send(result)
})

app.listen(5000)