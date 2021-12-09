import styled from "styled-components";

export const Background = styled.div`
  display: block;
  padding: 0 20px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.2);
`;

export const Content = styled.div`
  margin: 70px auto;
  padding: 0;
  max-width: 900px;
  height: 600px;
  background-color: white;
  box-shadow: 0px 0px 19px 3px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const ExitCross = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 15px;
  border: none;
  color: gray;
  background-color: transparent;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
`;

export const TextSide = styled.div`
  margin: 0;
  padding: 30px;
  flex: 2 1 400px;
`;

export const Header = styled.h2`
  margin-bottom: 30px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
`;