const express=require('express')
const path=require('path')

const app=express(); //executable function
const publicPath=path.join(__dirname,'public')
console.log(publicPath)

app.set('view engine','ejs')

app.get('',(req,res)=>
{
    res.sendFile(`${publicPath}/index.html`)
})
app.get('/profile',(req,res)=>
{   const user={
    name:'harsh',
    email:'harsh@test.com',
    city:'kota',
    skills:['php','js','c++']

}
    res.render(`profile`,{user})
})

app.get('/login',(req,res)=>
{
    res.render(`login`)
})



app.get('/about',(req,res)=>
{
    res.sendFile(`${publicPath}/about.html`)
})
app.get('/help',(req,res)=>
{
    res.sendFile(`${publicPath}/help.html`)
})

app.get('*',(req,res)=>
{
    res.sendFile(`${publicPath}/404.html`)
})
app.listen(5000) 