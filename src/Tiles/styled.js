import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
`;

export const Item = styled.button`
  height: 200px;
  background-color: #bec6ff;
  border-radius: 15px;
  border: none;
  box-shadow: 3px 3px 5px -1px #7F85B3;;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Content = styled.p`
  color: #515151;
  font-weight: 500;
`;