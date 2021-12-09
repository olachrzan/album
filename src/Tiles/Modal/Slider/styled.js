import Carousel from 'nuka-carousel';
import styled from "styled-components";

export const CarouselWrapper = styled(Carousel)`
  margin: 0 15px;
  padding: 15px 0;
`;

export const Item = styled.div`
  height: 550px;
  background-image: ${props => `url(${props.imageUrl})`};
  background-position: 50% 70%;
  background-size: cover;
`;