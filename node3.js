const http=require('http')

http.createServer((req,res)=>{
    // res.write("hello this is harsh");
    res.write("<h1>harsh</h1>")
    res.end();
}).listen(4500);

 