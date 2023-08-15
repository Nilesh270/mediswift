import React from "react";
import styled from "styled-components";
import "../index.css";
import {
  AccountCircle,
  KeyboardArrowDown,
  Search,
  ShoppingCart,
} from "@mui/icons-material";
import Logo from "../images/Logo.png";
import { Badge } from "@mui/material";

const Container = styled.div`
  position: relative;
`;
const Wrapper = styled.div`
  height: 10vh;
  background: #03b0be;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Left = styled.div`
  flex: 20%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
`;
const Center = styled.div`
  flex: 45%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchWrapper = styled.div`
  height: 35px;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
`;
const SerachInput = styled.input`
  width: 90%;
  height: 100%;
  border: none;
  font-size: 16px;
  &:focus-visible {
    outline: none;
  }
`;

const Img = styled.img`
  height: 90%;
  margin-left: 30px;
`;
const DeliveryPin = styled.div`
  color: white;
`;
const ExpDel = styled.div``;
const SelectPin = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 18px;
`;
const Right = styled.div`
  flex: 35%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 40px;
`;
const Button = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 2px;
  border: none;
  margin: 0px 15px;
  font-weight: 600;

  &:hover {
    color: white;
  }
`;
const Cart = styled.div`
  color: white;
`;
const Profile = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 15px;
`;
const Name = styled.div`
  font-size: 18px;
  margin: 0px 5px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Img src={Logo} />
        </Left>
        <Center>
          <SearchWrapper>
            <SerachInput
              type="text"
              placeholder="Search Medicines/Healthcare Products"
            ></SerachInput>
            <Search />
          </SearchWrapper>
          <DeliveryPin>
            <ExpDel>Express Delivery to</ExpDel>
            <SelectPin>
              Select Pincode <KeyboardArrowDown />
            </SelectPin>
          </DeliveryPin>
        </Center>
        <Right>
          <Button>Register</Button>
          <Button>Login</Button>
          <Profile>
            <AccountCircle />
            <Name>Nilesh</Name>
          </Profile>
          <Cart>
            <Badge badgeContent={2} color="primary">
              <ShoppingCart />
            </Badge>
          </Cart>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
