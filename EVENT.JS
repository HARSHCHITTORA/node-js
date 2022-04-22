const express=require("express")
const EventEmitter=require("events")
const app=express()

let count=0
const event=new EventEmitter()

event.on("countAPI",()=>{
    count++
    console.log("hello",count)
})

app.get("/",(req,res)=>{
     res.send("api called")
     event.emit("countAPI")//generate event
})
app.get("/search",(req,res)=>{
     res.send("api search")
     event.emit("countAPI")//generate event
})
app.get("/update",(req,res)=>{
     res.send("api update")
     event.emit("countAPI")//generate event
})

app.listen(5000)