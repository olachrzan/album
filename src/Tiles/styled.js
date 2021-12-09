import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
`;

export const Item = styled.button`
  height: 200px;
  background-color: #d9deff;
  border-radius: 15px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Content = styled.p`
  color: #515151;
  font-weight: 500;
`;