import Carousel from 'nuka-carousel';
import styled from "styled-components";

export const CarouselWrapper = styled(Carousel)`
  padding: 20px 0;
  flex: 1 0 600px;
  
  @media (max-width: 920px) {
    flex-grow: 0;
    margin: auto;
  }
  @media (max-width: 767px) {
    flex-shrink: 1;
    margin: 40px auto 0;
  }
`;

export const Item = styled.div`
  height: 550px;
  background-image: ${props => `url(${props.imageUrl})`};
  background-position: 50% 70%;
  background-size: cover;
`;