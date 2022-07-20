import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Valorant";
    src: url('../../fonts/Valorant Font.ttf');
    font-style: normal;
    font-weight: normal;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme["brand-white"]};
  }
`;