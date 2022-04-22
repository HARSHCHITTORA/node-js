const mongoose=require('mongoose')
const itemsSchema=new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
})

module.exports=mongoose.model('items',itemsSchema)
