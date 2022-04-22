// console.log('code-step-by step')
// console.log(100+20 )
//---------------------------------------------


const http=require('http');
const data=require('./data(node5)')
const { json } = require('stream/consumers');
http.createServer((req,res)=>{
res.writeHead(200,{'Content-Type':'application\json'});
res.write(JSON.stringify(/*{name:"harsh",email:"harsh@test.com"}*/ data))
res.end()

}).listen(5000)


