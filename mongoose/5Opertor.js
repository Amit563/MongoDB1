const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/CollegeName").then(()=>{
console.log("mongodb connected succssfully");
})

.catch((err)=>
{
    console.log(err)
});

// Schema

const student = new mongoose.Schema({
    name:String,
    id:Number,
    address:String,
    course:String
});

// collection

const studentList = new mongoose.model("studentList",student);

const createDocument = async () => {
    try {
          const branch = new studentList({
              name:"ajeet",
              id:123,
              address:"siddharth",
              course:"CSE"
          })

          const result = await branch.save()
        } catch(err)
        {
            console.log(err);
        }

};

const getDocument = async () =>
{
   try{
        const result = await studentList.find({id:{$gt:12}}).select({name:1})
        console.log(result);
   } 
   catch(err)
   {
       console.log(err);
   }
   
}

// createDocument();
getDocument();

