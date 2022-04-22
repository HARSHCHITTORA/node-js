const fs=require('fs')
const path=require('path')

const dirPath=path.join(__dirname,'node7')
console.warn(dirPath)
console.log(dirPath )

/*
------------------------------------------------
//create 5 file in node7

for(i=0;i<5;i++)
{
  fs.writeFileSync(`${dirPath}/hello${i}.txt`,"a simple text filr")
}
------------------------------------------------
*/

//read all the files in perticular directory
fs.readdir(dirPath,(err,files)=>
{
    // console.log(files)
    files.forEach((item)=>{
console.log(item)
    })
})