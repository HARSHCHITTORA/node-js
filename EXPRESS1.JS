const express= require('express')
const app=express()

app.get('',(req,res)=>{
    console.log("data sent by browser",req.query.name)
  res.send("hello "+ req.query.name)
})

app.get('/about',(req,res)=>{
    res.send("hello, this is aout page")
  })
  app.get('/help',(req,res)=>{
    res.send("hello, this is hrlp page")
  })


  app.listen(5000)