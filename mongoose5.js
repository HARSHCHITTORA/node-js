const mongoose=require('mongoose')

const findINdb=async()=>{
    await mongoose.connect("mongodb://localhost:27017/harsh")
    const itemsSchema=new mongoose.Schema({
            name:String,
            price:Number,
            brand:String,
            category:String  
          })
    const itemsModel=mongoose.model('items',itemsSchema)
    let data=await itemsModel.find()
    console.log(data)
        }

        findINdb()