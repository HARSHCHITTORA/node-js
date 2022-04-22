const fs=require('fs')
const path=require("path")
const dirPath=path.join(__dirname,'crud')
const filepath=`${dirPath}/HARSH.txt`
// fs.writeFileSync(filepath,"i am harsh")


// fs.readFile(filepath,'utf8',(err,item)=>{
//  console.log(item)
// })

// fs.appendFile(filepath,"AND file name is HArsh .txt",(err)=>{
// if(!err)
// {
// console.log('file is updated')
// }
// })


// fs.rename(filepath,`${dirPath}/fruit.txt`,(err)=>
// {
//     if(!err)
//     {
//         console.log("file name is updated")
//     }
// })


fs.unlinkSync(`${dirPath}/fruit.txt`)

