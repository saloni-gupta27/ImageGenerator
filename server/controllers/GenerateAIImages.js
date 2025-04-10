import * as dotenv from 'dotenv';
import {createError} from "../error.js"

dotenv.config();

//controller to generate image

export const generateImage = async (req,res,next)=>{
    try{
        // const {prompt} = req.body;
        const image = process.env.IMAGEURL;
        const generatedImage = image;
        return res.status(200).json({photo:generatedImage})
    }
    catch(error){
        next(createError(error.status, error?.response?.data?.error?.message)
        )
    }
} 