import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px 20px 0;
  box-shadow: 1px 1px 10px ${({ theme }) => theme.colors.periwinkle};
  border-radius: 20px;
  background-color: white;
`;