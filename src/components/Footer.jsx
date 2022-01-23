import { Facebook, Instagram, Mail, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`

    display:flex;
    ${mobile({
        flexDirection:"column",
    })}

`;
const Left = styled.div`
flex:1;
    display:flex;
    padding:20px;
    flex-direction: column;
`;


const Logo = styled.h1``;
const Desc = styled.p`

    margin: 20px 0px;
`;
const SocialContainer = styled.div`
    display: flex;

`;
const SocialIcon = styled.div`
    width:40px;
    height:40px;
    background-color: ${props =>props.bg};
    border-radius: 50%;
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:20px;

`;



const Center = styled.div`
flex:1;
    display:flex;
    padding:20px;
    flex-direction: column;
    ${mobile({
        display:"none",
    })}
`;

const Title = styled.h3`

margin-bottom: 30px;

`;
const List = styled.ul`
    margin:0;
    padding:0;
    list-style: none;
    display:flex;
    flex-wrap: wrap;
`;
const ListItem = styled.li`
width:50%;
margin-bottom: 10px;
`;

const Right = styled.div`
flex:1;
    display:flex;
    padding:20px;
    flex-direction: column;
    ${mobile({
        backgroundColor:"#fff8f8",
    })}
`;
const ContactItem = styled.div`

    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
width: 50%;
`;


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>LAMA.</Logo>
            <Desc>The are many variations of passages of Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Vitae necessitatibus eius laudantium rem tempora eaque nostrum 
                dolorem dicta eos quibusdam est, cum at, molestiae provident in illum cumque ducimus minima.
            </Desc>
            <SocialContainer>
                <SocialIcon bg="#3b5998">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon bg="#DD2A7B">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon bg="#00ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon bg="#BD081C">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>

        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Accessoires</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>

        </List>

        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/>662 Dixie Path , South Tobinchester 98336
            </ContactItem>
            <ContactItem>
               <Phone style={{marginRight:"10px"}}/>+1 234 56 78 
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}}/>contact@lama.dev
            </ContactItem>
            <Payment src="https://uploads-ssl.webflow.com/5ebf0989b78ad1a4a933411b/5f62b90eecc79b4a0fc63fe8_Accepted-Credit-Card-Payments.png"/>

        </Right>

    </Container>
    
    )
};

export default Footer;
