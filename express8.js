const express=require('express')

const app=express();


const reqFilter=(req,res,next)=>{
    if(!req.query.age)
    {
         res.send("please provide age")
    }
    else if(req.query.age<18)
    {
         res.send("you cannot acees this page")
    }
    else{
    next();
        }
}


app.get('/',(req,res)=>{
    res.send('welcome')

})

app.get('/users',reqFilter,(req,res)=>{
    res.send('welcome to users page')
})

app.get('/about',reqFilter,(req,res)=>{
    res.send('welcome to about page')
})

app.listen(5000)