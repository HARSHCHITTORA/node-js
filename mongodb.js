const {MongoClient}=require('mongodb')

const url='mongodb://localhost:27017'
const client=new MongoClient(url)
const database="harsh"

async function dbconnect()
{
    let result=await client.connect();
    let db=result.db(database)
    return db.collection('items')
}

module.exports=dbconnect;