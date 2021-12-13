import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto 40px;
  padding: 0 20px;
`;

export const MainHeader = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.tundora};
  line-height: 100%;
`;