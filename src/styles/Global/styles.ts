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

  @media screen and (max-width: 1368px) {
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

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 1.625rem;
`;

export const CardsButton = styled.button`
  width: 20.4375rem;
  height: 5rem;
  line-height: 2.2;
  
  font-size: 1.75rem;
  text-align: center;
  font-family: "Valorant", sans-serif;
  color: ${(props) => props.theme["red-500"]};
  text-decoration: none;

  border: 3px solid ${(props) => props.theme["red-500"]};
  border-radius: 10px;

  background: none;
  transition: all 200ms;

  &:hover {
    color: ${(props) => props.theme["brand-white"]};
    cursor: pointer;
    background: ${(props) => props.theme["red-500"]};
  }

  @media screen and (max-width: 1368px) {
    font-size: 1.375rem;
    width: 17.125rem;
    height: 4.125rem;
  }
`;
