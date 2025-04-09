import * as dotenv from 'dotenv';
import {createError} from "../error.js"
import axios from 'axios';

dotenv.config();

// Setup open ai api key
const apiKey=process.env.OPENAI_API_KEY_2
//controller to generate image

export const generateImage = async (req,res,next)=>{
    try{
        const {prompt} = req.body;
        console.log(prompt)
        const response = process.env.IMAGEURL;
        const generatedImage = response;
        return res.status(200).json({photo:generatedImage})
    }
    catch(error){
        next(createError(error.status, error?.response?.data?.error?.message)
        )
    }
} 