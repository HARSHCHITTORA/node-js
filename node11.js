
let a=10;
let b=0;



let waititngData=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(20)
    }, 2000);
})

waititngData.then((data)=>{
    b=data;
    console.log(a+b)
})


 
