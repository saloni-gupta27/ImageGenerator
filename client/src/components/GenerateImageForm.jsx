import React from 'react'
import styled from 'styled-components';
import TextInput from './TextInput';
import Button from './button';
import { AutoAwesome, CreateRounded } from '@mui/icons-material';

const Form= styled.div`
flex:1;
padding: 16px 20px;
display:flex;
flex-direction:column;
gap:9%;
justify-content:center;
@media (min-width:769px){
gap:4%;
}
`;

const Top= styled.div`
display:flex;
flex-direction:column;
gap:6px;
@media (max-width:768px){
padding-bottom:30px;
}
`;
const Title= styled.div`
font-size:28px;
font-weight:500;
color: ${({theme})=>theme.text_primary}
`;
const Desc= styled.div`
font-size:17px;
font-weight:400;
color: ${({theme})=>theme.text_secondary}
`;
const Body= styled.div`
display:flex;
flex-direction:column;
gap:18px;
font-size:12px;
font-weight:400;
color: ${({theme})=>theme.text_primary}

`;
const Actions= styled.div`
display:flex;
flex:1;
gap:8px;
padding-top:12px
`;


const GenerateImageForm = ({post,setPost,createPostLoading,setCreatePostLoading, generateImageLoading, setGenerateImageLoading  }) => {

 const generateImageFunc =()=>{
    setGenerateImageLoading(true);
 }
 const createPostFunc=()=>{
    setCreatePostLoading(true);
 }

  return (
   <Form>
    <Top>
        <Title>Generate Image with prompt</Title>
        <Desc>Write your prompt according to the image you want to generate</Desc>
    </Top>
    <Body>
       <TextInput label="Author" placeholder="Enter your name..." name="name" value={post.author} handelChange={(e)=>setPost({...post,author:e.target.value})}/>
       <TextInput label="Image Prompt" placeholder="Write a detailed prompt about the image..."
       name="name" rows="8" textArea value={post.prompt} handelChange={(e)=>setPost({...post,prompt:e.target.value})}/>

       **You can post the AI Generated image to the Community**
    </Body>
    <Actions>
            <Button text="Generate Image" flex leftIcon={<AutoAwesome/>}
            isLoading={generateImageLoading}
            isDisabled={post.prompt===""}
            onClick={generateImageFunc}
            />
            <Button text="Post Image" flex type="secondary" leftIcon={<CreateRounded/>}
            isLoading={createPostLoading}
            isDisabled={post.author===""||post.photo===""||post.prompt===""}
            onClick={createPostFunc}
            />
    </Actions>
   </Form>
  )
}

export default GenerateImageForm
