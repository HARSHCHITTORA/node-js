const dbconnect=require("./mongodb.js")

 const delete_=async ()=>{
         const db=await dbconnect()
         const result=await db.deleteOne({name:"priyansh"})
         console.warn(result)
 }

delete_()

