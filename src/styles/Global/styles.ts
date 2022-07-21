import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Valorant";
    src: url('valorant.ttf');
    font-style: normal;
    font-weight: normal;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .swiper {
    position: relative;
    width: 64.375rem;
    height: 100%;
    padding-top: 30px;
    padding-bottom: 60px;
  }

  .swiper-slide {
    background: ${(props) => props.theme["brand-white"]};
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-pagination-bullet {
    width: 1.125rem;
    height: 1.125rem;
    text-align: center;
    line-height: 1.25rem;
    font-size: 12px;
    color: #000;
    opacity: 1;
    background: ${(props) => props.theme["red-700"]};

    @media screen and (max-width: 1366px) {
      width: 0.75rem;
      height: 0.75rem;
    }
  }

  .swiper-pagination-bullet-active {
    color: #fff;
    background: ${(props) => props.theme["red-500"]};
  }
`;

export const CharContainer = styled.figure`
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

  min-height: calc(100vh - 41px);
`;

export const CardsButton = styled.button`
  font-size: 1.75rem;
  font-weight: bold;
  padding: 10px;
  text-align: center;
  font-family: "Nunito", sans-serif;
  color: ${(props) => props.theme["red-500"]};
  text-decoration: none;

  border: 3px solid ${(props) => props.theme["red-500"]};
  border-radius: 8px;

  background: none;
  transition: all 200ms;

  &:hover {
    color: ${(props) => props.theme["brand-white"]};
    cursor: pointer;
    background: ${(props) => props.theme["red-500"]};
  }

  @media screen and (max-width: 1368px) {
    font-size: 1.375rem;
  }
`;

export const DocumentText = styled.div`
  color: ${(props) => props.theme["red-500"]};
  line-height: 120%;
`;

export const DocumentTextValorant = styled(DocumentText)`
  font-family: "Valorant", sans-serif;
`;

export const DocumentTextNunito = styled(DocumentText)`
  font-family: "Nunito", sans-serif;
`;
