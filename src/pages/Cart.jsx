import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";


const Container = styled.div``;
const Wrapper = styled.div`
padding:20px;
  display: flex;
  flex-direction:column;
  ${mobile({
        padding:"10px",
    })}
`;
const Title = styled.h1`
font-weight: 300;
text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

`;
const TopButton = styled.button`
  padding:10px;
  font-weight: 600;
  cursor: pointer;
  background-color: ${props=>props.type ==="filled" ? "black" : "transparent"};
  color: ${props=>props.type ==="filled" && "white"};
  border: ${props=>props.type ==="filled" && "none"};
`;
const TopTexts = styled.div`
  display: flex;
  align-items: center;
  ${mobile({
        display:"none",
    })}
`;
const TopText = styled.span`
  text-decoration: underline;
  margin:0px 10px;

`;

const Bottom = styled.div`
  display: flex;
  ${mobile({
        flexDirection:"column",
    })}
`;
const Info = styled.div`
  flex:3;
`;
const Summary = styled.div`
  flex:1;
  border:0.5px solid lightgrey;
  border-radius: 10px;
  padding: 20px;
  height:50vh;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
        flexDirection:"column",
    })}
`;
const ProductDetail = styled.div`
flex:2;
  display: flex;
`;
const Image = styled.img`
  width:200px;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding:20px;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width:20px;
  height:20px;
  background-color: ${props=>props.bg};
  border-radius: 50%;
`;
const ProductSize = styled.span``;

const PriceDetail = styled.div`
flex:1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ProductAmount = styled.span`
  font-size: 24px;
  margin:5px;
  ${mobile({
        margin:"5px 15px",
    })}
`;
const ProductPrice = styled.span`
  font-weight: 200;
  font-size: 30px;
  ${mobile({
        marginBottom:"20px",
    })}
`;
const Hr = styled.hr`
 background-color: #eee;
 border:none;
 height:1px;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin:30px 0px; 
  display:flex;
  justify-content: space-between;
  font-size: ${props=>props.type === "total" && "24px"};
  font-weight: ${props=>props.type === "total" && "500"};

`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width:100%;
  background-color: black;
  padding: 10px;
  color:white;
  font-weight: 600;
`;

const Cart = () => {
  return (
  <Container>
    <Navbar/>
    <Announcement/>

    <Wrapper>
      <Title>YOUR BAG</Title>
      <Top>
        <TopButton>CONTINUE SHOPPING</TopButton>
        <TopTexts>
          <TopText>Shopping Bag(2)</TopText>
          <TopText>Your Wishlist(0)</TopText>
        </TopTexts>
        <TopButton type="filled">CHECKOUT NOW</TopButton>
      </Top>
      <Bottom>
        <Info>
          <Product>
              <ProductDetail>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8jnkAxI9R2PYT-eISZ0qgWWA10keneUrz-w&usqp=CAU"/>
                <Details>
                  <ProductName><b>Product: </b> JESSIE THUNDER SHOES </ProductName>
                  <ProductId><b>ID:</b> 9381371293</ProductId>
                  <ProductColor bg="grey"/>
                  <ProductSize><b>Size:</b> 37.5</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add/>
                  <ProductAmount>2</ProductAmount>
                  <Remove/>
                </ProductAmountContainer>
                <ProductPrice>$ 50</ProductPrice>

              </PriceDetail>
          </Product>
          <Hr/>
          <Product>
              <ProductDetail>
                <Image src="https://pngimg.com/uploads/dress_shirt/dress_shirt_PNG8068.png"/>
                <Details>
                  <ProductName><b>Product: </b> HAKURA T-SHIRT </ProductName>
                  <ProductId><b>ID:</b> 9381371296</ProductId>
                  <ProductColor bg="orange"/>
                  <ProductSize><b>Size:</b> M</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add/>
                  <ProductAmount>2</ProductAmount>
                  <Remove/>
                </ProductAmountContainer>
                <ProductPrice>$ 20</ProductPrice>

              </PriceDetail>
          </Product>

        </Info>
        <Summary>
          <SummaryTitle>ORDER SUMMARY</SummaryTitle>

          <SummaryItem>
            <SummaryItemText>Subtotal</SummaryItemText>
            <SummaryItemText>$ 80.0</SummaryItemText>
          </SummaryItem>

          <SummaryItem>
            <SummaryItemText>Estimated Shipping</SummaryItemText>
            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
          </SummaryItem>

          <SummaryItem>
            <SummaryItemText>Shipping Discount</SummaryItemText>
            <SummaryItemPrice>-$ 5.90</SummaryItemPrice>
          </SummaryItem>

          <SummaryItem type="total">
            <SummaryItemText >Total</SummaryItemText>
            <SummaryItemPrice>$ 80</SummaryItemPrice>
          </SummaryItem>
          <Button>CHECKOUT NOW</Button>
        </Summary>

      </Bottom>
    </Wrapper>


    <Footer/>
  </Container>
  )
};

export default Cart;
