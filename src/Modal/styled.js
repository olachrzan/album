import styled from "styled-components";
import image from "./images/photo.jpg";

export const ModalBackground = styled.div`
  padding: 0 20px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.6);
`;

export const ModalContent = styled.div`
  margin: 70px auto;
  padding: 0;
  max-width: 900px;
  height: 600px;
  background-color: white;
  box-shadow: 0px 0px 19px 3px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImageSide = styled.div`
  height: 100%;
  background-image: url("${image}");
  flex: 1 0 600px;
  background-position: 50% 70%;
  background-size: cover;
`;

export const TextSide = styled.div`
  margin: 0;
  padding: 30px;
  flex: 2 1 300px;
`;

export const Header = styled.h2`
  margin-bottom: 30px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
`;