import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    word-break: break-word;
    font-family: 'Raleway', sans-serif;
    line-height: 130%;
    letter-spacing: 1px;
    background-color: #e9e8fe;
    padding: 0 30px;
  }
`;