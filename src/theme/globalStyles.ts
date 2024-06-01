import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  ${normalize()}

  html, body {
    font-family: 'Pretendard', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    width: 100%;
    height: auto;
    position: relative;
    overflow-x: hidden;
    min-height: 100vh;
  }

  * {
    font-family: 'Pretendard', sans-serif;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
