import express  from 'express'
const app = express(); 
import fetch from "node-fetch"
import mongoose  from 'mongoose';

 mongoose.connect("mongodb://127.0.0.1:27017/students")

 const postSchema=new mongoose.Schema({
    group:{
        type:Number,
       
    },
    name:{
        type:String,
      
    },
    age:{
        type:String,
       
    },
    age:{
        type:String,
        
    },
    eyeColor:{
       type:String
        
    },
    
  favoriteFruit:{

},
company:{
    title:{
        type:String
    } ,
    email:{
        type:String
    },
    phone:{type:String},

    location: {
      country:{type:String},

      address:{type:String}
    }
  },
})
const Person= mongoose.model('persons',postSchema)
const PORT=8000;

app.get("/",(req,res)=>{
    res.send("hello aws i'm right here")
})
app.get("/api/data",async(req,res)=>{
    try {
        const personsdata= await Person.find({});
        res.json(personsdata);   
    } catch (error) {
        console.log('Error:',error.message);
        
    }   
})
app.listen(PORT,(req,res)=>{
    console.log(`Server is running successfully on port http://localhost:${PORT}`)
})
