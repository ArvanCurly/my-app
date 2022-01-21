import styled from "styled-components";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchOutlined  from '@material-ui/icons/SearchOutlined';
import FavoriteBorderOutlined from '@material-ui/icons/FavoriteBorderOutlined';


const Info = styled.div`
  opacity:0;
  width:100%;
  height:100%;
  position: absolute;
  top:0;
  left:0;
  background-color: gray;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.2);
  transform:all 0.5s ease;
  cursor:pointer;

`;


const Container = styled.div`
flex:1;
margin:5px;
min-width:280px;
height:350px;
display: flex;
align-items: center;
justify-content: center;
background-color: #f5fbfd;
position: relative;

  &:hover ${Info}{
    opacity:1;
  }`;

const Circle = styled.div`

  width:250px;
  height:250px;
  border-radius:50%;
  background-color: white;
  position:absolute;

`;

const Image = styled.img`

height:60%;
mix-blend-mode: multiply; // remove white background
z-index:2;


`;



const Icon = styled.div`


  width:40px;
  height:40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius:50%;
  z-index: 3;
  margin:10px;
  transition: all 0.5s ease;

  &:hover{
    background-color: #e9f5f5;
    transform:scale(1.1);
    cursor: pointer;
  }

`;

const ProductItem = ({item}) => {
  return (
      
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
          <Icon>
            <ShoppingCartIcon/>
          </Icon>
          <Icon>
            <SearchOutlined/>
          </Icon>
          <Icon>
            <FavoriteBorderOutlined/>
          </Icon>
        </Info>
    </Container>

)
};

export default ProductItem;
