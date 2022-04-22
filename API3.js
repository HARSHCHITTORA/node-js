const dbconnect=require("./mongodb.js")
const express=require("express")

const app=express()
app.use(express.json())

app.put("/",async (req,res)=>{
    let data=await dbconnect()
    let result=await data.updateOne(
        //{name:"peter"},
        {name:req.body.name},
        //{$set:{price:678}}
        {$set:req.body}
        )
  res.send({result:"updated"})
})

//update mobile name


app.put("/:name",async (req,res)=>{
    let data=await dbconnect()
    let result=await data.updateOne(
        //{name:"peter"},
        {name:req.params.name},
        //{$set:{price:678}}
        {$set:req.body}
        )
  res.send({result:"updated"})
})

app.listen(5000) 