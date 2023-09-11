import React from 'react';
import styled from 'styled-components';
import demoimg from '../images/demoimg.png';


const Container = styled.div`
    height:100%;
`;
const Wrapper = styled.div`
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`;

const Item = styled.div`
      height:70%;
      width:160px;
      background:white;
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      margin:10px;
      border-radius:10px;
      border: 1px solid lightgrey;
`;
const Img = styled.img`
    height:90%;
`;
const Itemname = styled.div``;

const CategoryItem = () => {
  return (
    <Container>
        <Wrapper>
          <Item>
            <Img src={demoimg} />  
          </Item>
          <Itemname>Top Products</Itemname>
        </Wrapper>
    </Container>
  )
}

export default CategoryItem
