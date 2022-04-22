const mongoose=require('mongoose')

const main=async ()=>{
  await mongoose.connect("mongodb://localhost:27017/harsh")
  const itemsSchema=new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String  
  })
  
 const itemsModel=mongoose.model('items',itemsSchema)
 let data=new itemsModel({name:"mi 8",price:6000,brand:"mi",category:"smartphone"})
 let result=await data.save();
 console.log(result)
 
}
main()

