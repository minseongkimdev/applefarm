import React from 'react';
import styled from '@emotion/styled';
import {SearchBar, Flex} from 'antd-mobile';

const Header = styled.header`
  max-width: 70rem;
  margin: 2rem auto;
  text-align: center;
`;

const Img = styled.div`
    position: relative;
    background-image: url("https://images.unsplash.com/photo-1610480921958-141c9a4cd0a5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2100&q=80");                                                               
    height: 300px;
    
    background-size: cover;    
    z-index:1
`; 
const Content = styled.div`
  position: relative;
  width:"90%";
  top: 60px;
  z-index: 2;
  text-align: center;
`;

export default function Banner() {

  return (
    <div>
    <Header>      
      <Img>
        <div/>
        <Content>
          <div>
          <Flex direction="column">
            <h1 style={{color:"white", textAlign:"left", marginLeft:"30px"}}>
              AppleFarm Beta
            </h1>
            <h4 style={{color:"white", textAlign:"left",marginLeft:"30px", marginTop:"-15px"}}>
              커뮤니티에 감성을 더하다.
            </h4>
            <SearchBar placeholder="Search" maxLength={8}
            style={{marginTop:"20px",width :"300px", position:"relative"}} />
            </Flex>
            </div>
        </Content>

      </Img>
    </Header>
    </div>
  );
}