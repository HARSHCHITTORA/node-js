const mongoose=require('mongoose')

const main=async ()=>{
  await mongoose.connect("mongodb://localhost:27017/harsh")
  const itemsSchema=new mongoose.Schema({
    name:String,
    price:Number  
  })
 const itemsModel=mongoose.model('items',itemsSchema)
 let data=new itemsModel({name:"m 9",price:1000})
 let result=await data.save();
 console.log(result)
}
main()

