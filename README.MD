<img src="node.png" alt="MarineGEO circle logo" style="height:150px; width:100%;"/>
<br><br>

<h1 align="center">NODE JS</h1>

## ABOUT NODE 

<details>
<summary>click</summary>
<br>
1.Node js runs on v8 engine<br>
2.node.js app runs in a single process without creating new thread for every request<br>
3.node js provide a set of asynchronous input-output primitives<br>
4.node js handle thousand of concurrent connection with a single server<br>
5.server is set to listem on the specified port and host name<br>
6.node is not a programing language<br>
7.this is server environment<br>
8.node js can connect with database<br>
9.code and syntax very similar to javascript But not exactly the same<br>
10.Node js free,open source<br>
11.node js mostly used for API<br>
12.So we can connect the same database with web App,mobile App<br>
13.Node js is easy to understand who knows Javascript<br>
14.node is super-fast for Api<br>
15.with Node and Javascript you can become full stack developer<br>
16.node written in c,c++,javascript<br>
17.Node js runs on the server side <br>
18.javascript runs in browser  <br>
</details>

## WHAT DEVELOPER MAKE WITH NODE JS

<details>
<summary>CLICK</summary>
<br>
1.DEVELOPER MAKE API WITH NODE JS<br>
2.SO WE CAN CONNECT SERVER WITH CLIENT<br>
3.NODE CAN MAKE API FOR WEB ,ANDROID AND IOS<br>
</details>

## About npm

npm is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry.

## HOW TO INSTALL NODE JS
[CLICK ON THE LINK TO DOWNLOAD NODEJS](https://nodejs.org/dist/v16.14.2/node-v16.14.2-x64.msi)

OPEN CMD AND CHECK ITS VERSION<BR>
TYPE
```
node -v
```
```
output:
v16.14.2
```
output may be different in your case.
## How to make export file

<details>
<summary>CLICK</summary>

```

module.exports={
    x:10,
    y:20,
    z:function(){
        return 10;
    }
}
```
</details>

## How to import external module

  
<details>
<summary>CLICK</summary>


```
const variable_name=require('module_name')
```
</details>

## How to run node file using terminal<br>

```
node .\filename.js
```


---
**INTERVIEW QUESTION**

Q.) WHY WE USE FILTER FUNCTION ?<BR>
ANS)IF WE WANT TO FIND SPECIFIC VALUE FROM THE ARRAY THEN WE USE FILTER FUNCTION

```
const arr=[1,2,3,4,5,6,3,2,1]

let result=arr.filter((item)=>{
return item>4
})

console.log(result)
```
```
OUTPUT:

[ 5, 6 ]
```
---

## core modules
modules which are installed which the node js

## global modules

These are the modules which do not need to import
<br><br>

# Package.json
It stores coding related file

The package. json file is the heart of any Node project. It records important metadata about a project which is required before publishing to NPM, and also defines functional attributes of a project that npm uses to install dependencies, run scripts, and identify the entry point to our package<br>
[source](https://heynode.com/tutorial/what-packagejson/#:~:text=Recap-,The%20package.,entry%20point%20to%20our%20package.)

### How to add package.json

```
npm init
```
Package.json is very important file for project

---
**INTERVIEW QUESTION**

Q.) Node js is single thread or multi thread?<BR>
ANS)single thread,
Node.js is asynchronous and single-threaded. This means that all I/O operations don’t block any other operations. It also means that you can send emails, read files, query the database, etc. all at the same time.
Each request to the web-server won’t create a separate Node.js process. Although, one Node.js process would run at all times which would listen to the connections. JavaScript code is also executed in the process’ main thread while all other I/O operations are executed in separate threads which results in almost no delays.
The virtual machine in Node.js (V8) which is responsible for executing JavaScript consists of a JIT compilation. The virtual machine can take the source code to compile it into the machine code at runtime. What it means is that all the “hot” functions that get called often than not can be compiled to the machine code thus boosting the execution speed.<br>
[source](https://www.peerbits.com/blog/why-nodejs-fast-and-its-best-use-cases.html)

<br>

Q)When you mistakely delete node_modules,How to recover them<br>

```
npm install
```
because in package.json there are dependencies are available when we run this command then all dependencies got installed. 

---

### HOW TO AVOID PUSHING NODE_MODULE IN GIT HUB 
 MAKE **.gitignore** file and write **/node_modules** in that file
<br>

# NODEMON/Time saving module
Nodemon continuously runs the node.js project

Nodemon is a tool that helps develop node. js based applications by automatically restarting the node application when file changes in the directory are detected. nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node
[source](https://www.npmjs.com/package//nodemon#:~:text=nodemon%20is%20a%20tool%20that,a%20replacement%20wrapper%20for%20node%20.)

## how to install nodemon

```
npm install nodemon -g
```
### How to run project
```
nodemon filename.js
```

# Make a simple API with static data

```
const http=require('http');
const { json } = require('stream/consumers');
http.createServer((req,res)=>{
res.writeHead(200,{'Content-Type':'application\json'});
res.write(JSON.stringify({name:"harsh",email:"harsh@test.com"}))
res.end()

}).listen(5000)

```
Another method using export and import module

```
export module:

-------------------------------------------
const data=[
    {name:"harsh",email:"harsh@test.com"},
    {name:"arav",email:"arav@test.com"},
    {name:"abhi",email:"abhi@test.com"}
]
module.exports=data;
-------------------------------------------
```
```
import module:

---------------------------------------------
const http=require('http');
const data=require('./data(node5)')
const { json } = require('stream/consumers');
http.createServer((req,res)=>{
res.writeHead(200,{'Content-Type':'application\json'});
res.write(JSON.stringify(data))
res.end()

}).listen(5000)

---------------------------------------------

```

## HTTP status code

[HTTP status code](https://moz.com/learn/seo/http-status-codes#:~:text=An%20HTTP%20status%20code%20is,code%3A%20the%20HTTP%20status%20code.)

## How to create file in specific folder

1.Import file module<br>
2.import path module<br>
3.fetch folder address using *path.join*<br>
4.then create file using writeFileSync <br>
```
const fs=require('fs')
const path=require("path")
const dirPath=path.join(__dirname,'crud')
const filepath=`${dirPath}/HARSH.txt`
fs.writeFileSync(filepath,"i am harsh")

``` 

## how to read file

```
fs.readFile(filepath,'utf8',(err,item)=>{
 console.log(item)
})
```

## How to append file

```
fs.appendFile(filepath,"AND file name is HArsh .txt",(err)=>{
if(!err)
{
console.log('file is updated')
}
})

```

## how to remame file
```

fs.rename(filepath,`${dirPath}/fruit.txt`,(err)=>
{
    if(!err)
    {
        console.log("file name is updated")
    }
})
```
## how to delete file

```

fs.unlinkSync(`${dirPath}/fruit.txt`)
```
---
**Interview Question**

Q) when we run the code without *utf8* in output it shows buffer why?

ANS) Buffer simply means temporary memory location.when we create file the node js want some memory so that it can perform operation.

---

## Synchronous
In Synchronous operations tasks are performed one at a time

<img src="Sync.png" alt="MarineGEO circle logo" style="height:50px; width:80%;"/>

## Asynchronous
In Asynchronous,Second Task do not wait to finish First Task

<img src="Async.png" alt="MarineGEO circle logo" style="height:50px; width:80%;"/>
