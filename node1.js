// // console.log("hello world")

// const app=require('./node1_export')

// console.log(app)
// console.log(app.x)
// console.log(app.y)
// console.log(app.z())

const arr=[1,2,3,4,5,6,3,2,1]

let result=arr.filter((item)=>{
// return item===1
return item>4
})

console.log(result)