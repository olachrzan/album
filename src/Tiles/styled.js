import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Item = styled.button`
  height: 200px;
  background-color: ${({ theme }) => theme.colors.melrose};
  border-radius: 15px;
  border: none;
  box-shadow: 3px 3px 3px ${({ theme }) => theme.colors.portage};
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
  height: 50px;

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
    color: ${({ theme }) => theme.colors.tundora};
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
  color: ${({ theme }) => theme.colors.cornflowerBlue};
  font-weight: 600;
  transition: filter .1s linear;

  &:hover {
    filter: brightness(75%);
  }
`;
