const dbconnect=require("./mongodb.js")

const update=async ()=>{
    const db=await dbconnect()
    const result=await db.updateOne(
        {name:'note 5'},{
            $set:{name:"max pro 5"}
        }
    )
}
update()