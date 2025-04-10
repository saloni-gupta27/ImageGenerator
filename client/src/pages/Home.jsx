import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SearchBar from '../components/SearchBar';
import ImageCard from '../components/ImageCard';
import { imageurl } from '../base64';
import { GetPost } from '../api';
import { CircularProgress } from '@mui/material';

const Container = styled.div`
height:100%;
overflow-y: scroll;
background: ${({theme})=>theme.bg};
padding: 30px 30px;
padding-bottom: 50px;
flex-direction:column;
align-items: center;
text-align:center;
gap:20px;
@media (max-width:760px){
padding: 6px 10px;
};
`;

const Headline = styled.div`
font-size:34px;
font-weight:500;
color:${({theme})=>theme.text_primary};
display:flex;
align-items:center;
flex-direction:column;
@mendia (max-width:600px){
    font-size:22px;
}
`;

const Span = styled.div`
font-size:30px;
font-weight:800;
color:${({theme})=>theme.secondary};
`;

const Wrapper= styled.div`
width:100%;
max-width:1400px;
padding: 32px 0px;
display: flex;
justify-content: center;
`;
const CardWrapper = styled.div`
display:grid;
gap:20px;
@media (min-width:1200px){
    grid-template-columns: repeat(4,1fr);
}
@media (min-width:640px) and (max-width:1199px){
    grid-template-columns: repeat(3 ,1fr);
}
@media (max-width:639px){
    grid-template-columns: repeat(2,1fr);
}
`;

const Home = () => {
    const[posts,setPosts] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] =useState("");
    const [filteredPosts,setFilteredPosts] = useState([]);
    const [search,setSearch] = useState("");

    const getPostFunc=()=>{
        setLoading(true);
        GetPost()
           .then((res)=>{
                setPosts(res?.data?.data);
                setFilteredPosts(res?.data?.data)
                setLoading(false)
            })
          .catch((error)=>{
                setError(error?.response?.data?.message)
                setLoading(false)
             })
      }

      useEffect(()=>{
        getPostFunc();
      },[])

    //Search
    useEffect(()=>{
        const searchFilteredPost = posts.filter((post)=>{
            const promptMatched = post?.prompt?.toLowerCase().includes(search.toLowerCase());
            const authorMatched = post?.author?.toLowerCase().includes(search.toLowerCase());
             return promptMatched || authorMatched
        })
        if(!search){
            setFilteredPosts(posts);
        }
        else{
            setFilteredPosts(searchFilteredPost);
        }

    },[posts,search])

  return (
    <Container>
        <Headline>
            Explore Popular posts in the Community!
            <Span>⦿ Generated with AI ⦿</Span>
        </Headline>
        <SearchBar search={search} setSearch={setSearch}/>
        <Wrapper> 
            {error && <div style={{color:"red"}}>{error}</div>}
            {loading ? (
                <CircularProgress/>
            ) : (
                <CardWrapper>
                {filteredPosts.length===0 ? (
                    <> No Posts Found </>
                ): (
                <>
                 {filteredPosts.slice().reverse().map((post,index)=>(
                    <ImageCard  key={index} item={post}/>
                 ))}
                 </>
                 ) 
                }             
                </CardWrapper>
            )
            }
        
           

            
        </Wrapper>
    </Container>
  )
}

export default Home
