import styled, { createGlobalStyle } from "styled-components";

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

export const CharContainer = styled.div`
  position: relative;
  margin: 0 1.875rem;
  width: 23.125rem;
  height: 35.375rem;

  @media screen and (max-width: 1366px) {
    width: 18.875rem;
    height: 25.875rem;
  }

  @media screen and (max-width: 1028px) {
    display: none;
  }
`;

export const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
