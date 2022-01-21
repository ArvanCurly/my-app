import styled from "styled-components";
import ArrowLeftOutlinedIcon from '@material-ui/icons/ArrowLeftOutlined';
import ArrowRightOutlined from '@material-ui/icons/ArrowRightOutlined';
import { useState } from "react";
import { sliderItems } from "../data";

const Container = styled.div`
width:100%;
height: 80vh;
display: flex;
position: relative;
overflow:hidden;
`;

const Arrow = styled.div`
width:50px;
height:50px;
border-radius: 50%;
background-color: #fff7f7;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top:0;
bottom:0;
left: ${props => props.direction === "left" && "10px"};
right: ${props => props.direction === "right" && "10px"};
cursor: pointer;
opacity:0.5;
margin:auto;
z-index: 2;
`; 

const Wrapper = styled.div`
    height:100%;
    display: flex;
    transition: all 1.5s;
    transform: translateX(${props => props.slideIndex * -100}vw);
`;

const Slide = styled.div` 
width:100vw;
height: 100vh;
display:flex;
align-items: center;
background-color: ${props => props.bg};
background : ${props => props.bk && props.bk}

`;

const ImgContainer = styled.div`
flex:1;
height:100%;
`;

const Image = styled.img`
height:80%;
`;

const InfoContainer = styled.div`
flex:1;
padding: 50px;
`;

const Title = styled.h1`
font-size: 70px;
`;
const Desc = styled.p`
margin:50px 0px;
font-size: 20px;
font-weight:500;
letter-spacing:3px;
`;

const Button = styled.button`
padding: 10px;
font-size:20px;
background-color: transparent;
cursor: pointer;
`;


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) =>  {
        
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : (sliderItems.length-1)  )
        }else {
            setSlideIndex(slideIndex < (sliderItems.length-1) ? slideIndex +1 : 0 )

        }

    };

    return ( 
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlinedIcon/>
            </Arrow>

            <Wrapper slideIndex= {slideIndex}>

            {sliderItems.map( item =>(
                
                <Slide key={item.id} bg={item.bg} bk={item.bk && item.bk}>
                    <ImgContainer>
                    <Image  src={item.img}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
                
                ))}
                
            </Wrapper>

            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        
        </Container>
    )
}

export default Slider
