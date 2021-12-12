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
  cursor: pointer;
  position: relative;
  z-index: 1;
`;

export const Icon = styled.img`
  margin: 10px;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin:auto;
  transition: top .2s linear;

  ${Item}:hover & {
    top: -40px;
  }
`;

export const Content = styled.p`
padding: 0 10px;
  position: absolute;
  top: 55%;
  right: 0;
  left: 0;
  color: transparent;
  font-weight: 500;
  transition: color .2s linear;

  ${Item}:hover & {
    color: #414141;
  }
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
