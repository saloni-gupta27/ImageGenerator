import React, { useState } from 'react'
import styled from 'styled-components'
import GenerateImageForm from '../components/GenerateImageForm';
import GeneratedImageCard from '../components/GeneratedImageCard';

const Container = styled.div`
height:100%;
min-height: 300px;
overflow-y: scroll;
background: ${({theme})=>theme.bg};
padding: 30px 30px;
padding-bottom: 50px;
flex-direction:column;
align-items: center;
gap:20px;
@media (max-width:760px){
padding: 6px 10px;
};
`;

const Wrapper= styled.div`
width:100%;
height:fit-content;
max-width:1200px;
gap:8px;
display: flex;
flex:1
justify-content: center;
@media (max-width:768px){
    flex-direction:column; 
}
`;

const CreatePost = () => {
    const [createPostLoading,setCreatePostLoading]= useState(false)
    const [generateImageLoading,setGenerateImageLoading]= useState(false)
     const [post,setPost] =useState({
        author:"",
        prompt:"",
        photo:""
     })
  return (
    <Container>
        <Wrapper>
            <GenerateImageForm post={post} setPost={setPost} 
            createPostLoading={createPostLoading} setCreatePostLoading={setCreatePostLoading} generateImageLoading={generateImageLoading} setGenerateImageLoading={setGenerateImageLoading}   />
            <GeneratedImageCard loading={generateImageLoading} src={post?.photo}/>
        </Wrapper>
    </Container>
  )
}

export default CreatePost
