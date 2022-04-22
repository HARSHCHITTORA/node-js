 const dbconnect=require('./mongopractice.js')

 const insert=async ()=>
        {
            const db=await dbconnect();
            const result = await db.insertMany(
        [ 
            {name:"note 5",brand:'vivo',price:320,category:'mobile'},
            {name:'note 6',brand:'samsung',price:340,category:'mobile'},
            {name:'asjnaskj',brand:'sdf',price:340,category:'smartphone'},
        ]
        )
            console.log(result.acknowledged)
        {
             console.log("data inserted")
        }
        
        }

insert()



