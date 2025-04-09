 import styled, { ThemeProvider } from "styled-components";
 import { darkTheme } from "./utils/Theme";
 import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Navbar from "./components/Navbar";

 const Container= styled.div`
 width:100%;
 height:100%;
 display:flex;
 background: ${({theme})=>theme.bg}
 `
 const Wrapper=styled.div`
 height:100%;
  position:relative;
 display:flex;
 flex:1;
 flex-direction:column;
 justify-content:center;
 color: ${({theme})=>theme.text_primary};
 overflow-x: hidden;
 overflow-y: hidden;
 transition: all 0.2 ease;
 `


function App() {
  return (
   <ThemeProvider theme={darkTheme}>
    <Container>
      <Wrapper>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/post" element={<CreatePost/>}/>
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </Container>
   </ThemeProvider>
  );
}

export default App;
