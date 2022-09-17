import express  from 'express'
const app = express(); 
import fetch from "node-fetch"
import mongoose  from 'mongoose';

 mongoose.connect("mongodb://127.0.0.1:27017/fetch_api")

 const postSchema=new mongoose.Schema({
    post_Id:{
        type:String,
       
    },
    Id:{
        type:String,
      
    },
    username:{
        type:String,
       
    },
    useremail:{
        type:String,
        require:true
    },
    desc:{
       type:String
        
    },
})
const Post= mongoose.model('comment',postSchema)
const PORT=8000;

// by using function
// async function getComment(){
//         const mypost= await fetch ("https://jsonplaceholder.typicode.com/comments")
//         const resData=await mypost.json()
//         for(let i=0;i<resData.length;i++){
//           const commentData = new Post({
//                 post_Id:resData[i]['postId'],
//                 Id:resData[i]['id'],
//                 username:resData[i]['name'],
//                 useremail:resData[i]['email'],
//                 desc:resData[i]['body']
//             });
//             commentData.save()

//         }
//     }
//     getComment()
app.get("/api/data",async(req,res)=>{
    const mypost= await fetch ("https://jsonplaceholder.typicode.com/comments")
    const resData=await mypost.json()
    console.log(resData)
    for(let i=0;i<resData.length;i++){
      const commentData = new Post({
            post_Id:resData[i]['postId'],
            Id:resData[i]['id'],
            username:resData[i]['name'],
            useremail:resData[i]['email'],
            desc:resData[i]['body']
        });
        commentData.save()

    }
    res.status(200).json(resData)
})



app.listen(PORT,(req,res)=>{
    console.log(`Server is running successfully on port http://localhost:${PORT}`)
})
