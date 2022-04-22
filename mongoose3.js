const mongoose=require('mongoose')

const updateIndb=async()=>{
    await mongoose.connect("mongodb://localhost:27017/harsh")
    const itemsSchema=new mongoose.Schema({
            name:String,
            price:Number,
            brand:String,
            category:String  
          })
    const itemsModel=mongoose.model('items',itemsSchema)
    let data=await itemsModel.updateOne(
        {name:"note 5"},
        {$set:{price:800,name:"note5"}}
        )
        console.log(data)
}
updateIndb()

