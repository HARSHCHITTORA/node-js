const express=require('express')
const reqFilter=require('./middleware')

const app=express();

const route=express.Router()


route.use(reqFilter)

app.get('/',(req,res)=>{
    res.send('welcome')

})

app.get('/users',(req,res)=>{
    res.send('welcome to users page')
})

route.get('/about',(req,res)=>{
    res.send('welcome to about page')
})

route.get('/contact',(req,res)=>{
    res.send('welcome to contact page')
})

app.use('/',route)
app.listen(5000)