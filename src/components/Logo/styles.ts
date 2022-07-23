import styled from 'styled-components';

export const LogoContainer = styled.div`
  position: relative;
  width: 15rem;
  height: 12.25rem;
  margin-bottom: 0.625rem;

  img {
    @keyframes ShowLogo {
      from {
        bottom: 500%;
      }
      to {
        bottom: 0%;
      }
    }

    animation: ShowLogo cubic-bezier(0.16, 1, 0.3, 1) 2000ms;
  }

  @media screen and (max-width: 1600px) {
    width: 9.0625rem;
    height: 7.5625rem;
  }

  @media screen and (max-width: 560px) {
    width: 7.8125rem;
    height: 6.5rem;
  }
`;
