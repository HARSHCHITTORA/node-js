const express= require('express')
const app=express()

app.get('',(req,res)=>{
  res.send(`
  <h1>welcome to home page</h1>
  <a href="/about">go to about page</a>`)
})

app.get('/about',(req,res)=>{
    res.send(`
    <input type="text" placeholder="user name"/value="${req.query.name}">
    <button>submit</button>
    `
    )
  })
  app.get('/help',(req,res)=>{
    res.send([{
        name:'anil',
        email:'anil@test.com'
    },
{
    name:'harsh',
    email:'harsh@test.com'
}])
  })


  app.listen(5000)