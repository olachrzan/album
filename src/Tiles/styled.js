import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 200px);
  grid-gap: 50px;
`;

export const Item = styled.button`
  background-color: grey;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.p`
  color: white;
`;