import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Wrapper = styled.div`
    display: flex;
    padding: 20px;
`;

const ImageContainer = styled.div`
    flex:1;
`;
const Image = styled.img`
    height:90vh;
    object-fit: cover;
    width:600px;
`;
const InfoContainer = styled.div`
padding: 0px 50px;
`;
const Title = styled.h1`
font-weight: 200;
`;
const Desc = styled.p`
    margin:20px 0px;
`;
const Price = styled.span`
font-weight: 100;
font-size: 40px;
`;


const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width:50%;
    margin: 20px 0px;
`;
const Filter = styled.div`
display:flex;
align-items: center;
`;
const FilterTitle = styled.div`
    font-weight: 200;
    font-size:20px;
`;
const FilterColor = styled.span`

    width:20px;height:20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin:0px 5px;

`;
const FilterSize = styled.select`
    margin-left: 10px;  
    padding: 10px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
display: flex;
width:50%;
justify-content: space-between;
margin: 20px 0px;
`;
const AmountContainer = styled.div`

display: flex;
align-items: center;
font-weight: 700;

`;
const Amount = styled.span`

    width: 30px;
    height:30px;
    border-radius: 10px;
    border:1px solid teal;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:0px 5px;
`;
const Button = styled.button`
padding: 15px;
cursor: pointer;
background-color: white;
border:2px solid teal;
font-weight: 500;

&:hover {
    background-color:#f8f4f4;
}

`;


const Product = () => {
  return <div>
      <Navbar/>
      <Announcement/>
      <Wrapper>
            <ImageContainer>
                <Image src="https://www.witchery.com.au/images/assetimages/2022/01-january/week-03/shirts-dt.jpg"/>
            </ImageContainer>

          <InfoContainer>
              <Title>Denim Jumpsuit</Title>
              <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                  Error eligendi quia tempore neque. Quasi aliquid voluptate cupiditate, 
                  voluptatem debitis ea vero eligendi itaque laudantium quis
                   aperiam distinctio reiciendis suscipit. Exercitationem!
                </Desc>
              <Price>$ 20</Price>
              <FilterContainer>
                  <Filter>
                      <FilterTitle>Color</FilterTitle>
                      <FilterColor color="black"/>
                      <FilterColor color="darkblue"/>
                      <FilterColor color="gray"/>
                  </Filter>
                  <Filter>
                      <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>

                        </FilterSize>
                  </Filter>
              </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
                

          </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
  </div>;
};

export default Product;
