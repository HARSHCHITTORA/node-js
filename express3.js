const express=require('express')
const path=require('path')

const app=express(); //executable function
const publicPath=path.join(__dirname,'public')
console.log(publicPath)

app.use(express.static(publicPath))
app.listen(5000) 