// const {MongoClient}=require('mongodb')

// const url='mongodb://localhost:27017'
// const client=new MongoClient(url)
// const database="harsh"

// async function dbconnect()
// {
//     let result=await client.connect();
//     let db=result.db(database)
//     return db.collection('items')
// }

// dbconnect().then((res)=>{
// res.find({}).toArray().then((data)=>{
//     console.log(data)
// })
// })


const dbconnect=require("./mongodb.js")

const main= async ()=>{
    let data=await dbconnect();
    data=await data.find().toArray()
    console.warn(data)
}
main()