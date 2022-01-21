import { Badge } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';


const Container = styled.div`
    height:60px;
`;

const Wrapper = styled.div`
padding:10px 20px;
display:flex;
align-items: center;
justify-content:space-between;
`;

const Left = styled.div`
flex:1;
display: flex;
align-items: center;
`;

const Language = styled.span `
cursor: pointer;
font-size: 14px;
`;

const SearchContainer = styled.div`
border: 0.5px solid lightgrey;
display: flex;
align-items: center;
margin-left: 25px;
padding:5px;
`;

const Input = styled.input`
border:none;

`;

const Center = styled.div`
flex:1;
text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
`;

const Right = styled.div`
flex:1;
display:flex;
align-items: center;
justify-content: flex-end;
`;

const MenuItems = styled.div`
margin-left: 25px;
`;


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search"/>
                        <Search style={{color:'gray',fontSoze:'16'}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>LAMA.</Logo>
                </Center>
                <Right>
                    <MenuItems>REGISTER</MenuItems>
                    <MenuItems>SIGN IN</MenuItems>
                    <MenuItems>
                        <Badge badgeContent={4} color="primary">
                        <ShoppingCartIcon />
                        </Badge>
                    </MenuItems>
                   
                </Right>
            </Wrapper>
            
        </Container>
    )
}

export default Navbar
