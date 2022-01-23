import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`

display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #fcf5f5;
height:60vh;


`; 
const Title = styled.h1`

    font-size:70px;
    margin-bottom: 20px;
    ${mobile({
        fontSize:"55px",
    })}

`;
const Description = styled.div`

    font-size: 24px;
    margin-bottom:20px;
    ${mobile({
        textAlign:"center",fontSize:"20px"
    })}

`;
const InputContainer = styled.div`

    width:50%;
    height:50px;
    display: flex;
    justify-content: center;
    border:1px solid lightgrey;
    background-color: white;
    ${mobile({
        width:"80%",
    })}

`;
const Input = styled.input`
    flex:8;
    border:none;
    padding-left:20px;

    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px grey;
    }


`;
const Button = styled.button`
    flex:1;
    background-color: teal;
    color:white;
    border:none;

`;


const Newsletter = () => {
  return (
 
    <Container>
        <Title>NEWSLETTER</Title>
        <Description>Get timely updates from your favorite products.</Description>
        <InputContainer>
            <Input placeholder="Your email"/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>

    </Container>
  );
};

export default Newsletter;
