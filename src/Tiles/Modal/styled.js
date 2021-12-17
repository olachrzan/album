import styled from "styled-components";

export const Background = styled.div`
  padding: 0 20px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.almostBlack};
  display: flex;
`;

export const Content = styled.div`
  margin: auto;
  padding: 0 20px;
  max-width: 900px;
  height: 600px;
  background-color: ${({ theme }) => theme.colors.titanWhite};
  border-radius: 15px;
  box-shadow: 0px 0px 14px ${({ theme }) => theme.colors.almostBlack};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    flex-wrap: wrap;
  }
`;

export const ExitCross = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 5px;
  right: 5px;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export const LeftTop = styled.span`
  height: 3px;
  width: 30px;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.portage};
  border-radius: 2px;
  transform: translate(-50%) rotate(45deg);
  transition: all .2s ease-in;

  ${ExitCross}:hover & {
    filter: brightness(85%);
    transform: translate(-50%) rotate(-45deg);
  }
`;

export const RightTop = styled(LeftTop)`
  transform: translate(-50%) rotate(-45deg);

  ${ExitCross}:hover & {
    transform: translate(-50%) rotate(45deg);
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

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.tundora};
`;