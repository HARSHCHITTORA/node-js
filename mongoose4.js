const mongoose=require('mongoose')

const deleteINdb=async()=>{
    await mongoose.connect("mongodb://localhost:27017/harsh")
    const itemsSchema=new mongoose.Schema({
            name:String,
            price:Number,
            brand:String,
            category:String  
          })
    const itemsModel=mongoose.model('items',itemsSchema)
    let data=await itemsModel.deleteOne({name:"note5"})
    console.log(data)
        }

        deleteINdb()