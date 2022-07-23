import styled, { createGlobalStyle } from 'styled-components';

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
    outline-offset: 0.1875rem;
    outline-color: ${props => props.theme['red-500']};
  }

  button {
    outline-offset: 0.3125rem;
  }

  .swiper {
    background: transparent;
    position: relative;
    width: 64.375rem;
    height: 100%;
    padding-top: 1.875rem;
    padding-bottom: 3.125rem;

    @media screen and (max-width: 1080px) {
      width: 49.25rem;
    }

    @media screen and (max-width: 880px) {
      width: 36.9375rem;
    }

    @media screen and (max-width: 620px) {
      width: 24.625rem;
    }

    @media screen and (max-width: 410px) {
      width: 12.3125rem;
    }
  }

  .swiper-slide {
    background: ${props => props.theme['brand-white']};
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
    width: 0.875rem;
    height: 0.875rem;
    opacity: 1;
    background: ${props => props.theme['red-700']};

    @media screen and (max-width: 1500px) {
      width: 0.75rem;
      height: 0.75rem;
    }
  }

  .swiper-pagination-bullet-active {
    background: ${props => props.theme['red-500']};
  }
`;

export const CharContainer = styled.figure`
  position: relative;
  margin: 0 1.875rem;
  width: 23.125rem;
  height: 35.375rem;

  @media screen and (max-width: 1500px) {
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

  min-height: calc(100vh - 2.5625rem);
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: calc(100vh - 5.75rem);

  @media screen and (max-width: 1600px) {
    justify-content: flex-start;
  }

  @media screen and (max-width: 560px) {
    justify-content: center;
  }
`;

export const Button = styled.button`
  text-decoration: none;
  text-align: center;
  width: 100%;
  background: transparent;
  border: 2px solid ${props => props.theme['red-500']};
  border-radius: 100px;
  transition: all 200ms;
  font-family: 'Nunito', sans-serif;
  font-size: 1.2rem;
  color: ${props => props.theme['red-500']};
  font-weight: bold;

  &:hover:enabled {
    transform: scale(1.03);
    color: ${props => props.theme['brand-white']};
    cursor: pointer;
    background: ${props => props.theme['red-500']};
  }

  &:active:enabled {
    outline-offset: 0.125rem;
  }

  &:disabled {
    transform: scale(0.97);
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const DocumentText = styled.div`
  color: ${props => props.theme['red-500']};
  line-height: 120%;
`;

export const DocumentTextValorant = styled(DocumentText)`
  font-family: 'Valorant', sans-serif;
`;

export const DocumentTextNunito = styled(DocumentText)`
  font-family: 'Nunito', sans-serif;
`;
