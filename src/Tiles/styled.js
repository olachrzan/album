import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
`;

export const Item = styled.button`
  height: 200px;
  background-color: #c0baff;
  border-radius: 15px;
  border: none;
  box-shadow: 3px 3px 3px #a2aae7;;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Icon = styled.img`
  margin: 10px;
`;

export const Content = styled.p`
  color: #515151;
  font-weight: 500;
`;

export const Footer = styled.footer`
  margin-top: 30px;
  grid-column: 1 / -1;
`;

export const Line = styled.hr`
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgb(90, 98, 146, 0.75), rgba(0, 0, 0, 0));
`;

export const Text = styled.p`
  margin: 10px;
  font-size: 12px;
  text-align: center;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #6f7dde;
  font-weight: 500;
  transition: filter .1s linear;

  &:hover {
    filter: brightness(80%);
  }
`;
