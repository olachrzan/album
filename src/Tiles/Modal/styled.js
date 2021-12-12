import styled from "styled-components";

export const Background = styled.div`
  padding: 0 20px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.2);
  z-index: 2;
`;

export const Content = styled.div`
  margin: 70px auto;
  padding: 0;
  max-width: 900px;
  height: 600px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const ExitCross = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export const LeftTop = styled.div`
  height: 3px;
  width: 30px;
  position: absolute;
  margin-top: 24px;
  background-color: grey;
  border-radius: 2px;
  transform: rotate(45deg);
  transition: all .2s ease-in;

  ${ExitCross}:hover & {
    transform: rotate(-45deg);
    background-color: #373737;
  }
`;

export const RightTop = styled.div`
  height: 3px;
  width: 30px;
  position: absolute;
  margin-top: 24px;
  background-color: grey;
  border-radius: 2px;
  transform: rotate(-45deg);
  transition: all .2s ease-in;

  ${ExitCross}:hover & {
    transform: rotate(45deg);
    background-color: #373737;
  }
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