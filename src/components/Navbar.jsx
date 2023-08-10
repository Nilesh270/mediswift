import React from 'react';
import styled from 'styled-components';
import "../index.css"
import { Search } from '@mui/icons-material';
import Logo from '../images/Logo.png'

const Container = styled.div`
    
`;
const Wrapper = styled.div`
    height:10vh;
    background:#03B0BE;
    display:flex;
    justify-content:center;
    align-items:center;

`;
const Left = styled.div`
  flex:20%;
  height:100%;
  display:flex;
  justify-content:start;
  align-items:center;

`;
const Center = styled.div`
  flex:50%;
  display:flex;
  justify-content:start;
  align-items:center;
`;
const Right = styled.div`
  flex:30%;
`;
const SearchWrapper = styled.div`
  height:35px;
  width:500px;
  display:flex;
  justify-content:center;
  align-items:center;
  background:white;

`;
const SerachInput = styled.input`
  width:90%;
  height:100%;
  border:none;
  font-size:16px;
  &:focus-visible {
    outline: none;
  }

  
`;
const Img = styled.img`
  height:90%;
  margin-left:30px;
`


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
            <Img src={Logo}/>
            </Left>
            <Center>
              <SearchWrapper>
                  <SerachInput  type='text' placeholder='Search Medicines/Healthcare Products'></SerachInput>
                  <Search/>
              </SearchWrapper>
            </Center>
            <Right></Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar;
