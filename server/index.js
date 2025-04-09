import cors from 'cors'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv';
import express from 'express';
import PostRouter from './routes/Posts.js'
import GenImgRouter from './routes/GenerateAIImage.js'

const app = express();
app.use(cors());
app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({extended:true}));

dotenv.config();

//error handler
app.use((err,req,res,next)=>{
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    return res.status(status).json({
        success:false,
        status,
        message,
    })
})

//define routes
app.use("/api/post",PostRouter);
app.use("/api/genImg",GenImgRouter)

//Default get
app.get('/',async (req,res)=>{
    res.status(200).json({
        message:"Hello Developer!"
    })
})

//function to connect to mongoose
const connect=()=>{
    mongoose.set("strictQuery",true);
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>console.log("connected to mongodb"))
    .catch((err)=>{console.error("error connectiong to mongodb.")
        console.error(err);
        
    })
}

const startServer = async () =>{
    try{
        connect();
        app.listen(8080,()=>console.log("Server is listening at port 8080"))
    }catch(err){
        console.log(err)
    }
}

startServer();