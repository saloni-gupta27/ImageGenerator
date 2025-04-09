import * as dotenv from 'dotenv';
import {createError} from "../error.js"
 import { v2 as cloudinary} from 'cloudinary';
import Post from '../models/Posts.js';

dotenv.config();

 cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

//Get all posts
export const getAllPosts = async(req,res,next) =>{
    try{
        const posts = await Post.find({});
        return res.status(200).json({success:true,data:posts});
    }catch(error){
        next(createError(error.status, error?.response?.data?.error?.message)
    )  }
}

//create Post
export const createPost = async(req,res,next) =>{
    console.log("object")
    try{
        const {author,prompt,photo} =req.body;
        console.log(author, prompt);
        const photoUrl=await cloudinary.uploader.upload(photo);
        const newPost = await Post.create({author,prompt,photo:photoUrl?.secure_url
        });
        await newPost.save();
        return res.status(201).json({success:true,data:newPost});
    }catch(error){
        next(createError(error.status, error?.response?.data?.error?.message || error?.message)
    )  }
}