import styled from 'styled-components';

export const LogoContainer = styled.div`
  position: relative;
  width: 15rem;
  height: 12.25rem;
  margin-top: -6rem;
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

  @media screen and (max-width: 1368px) {
    margin-top: -3rem;
    width: 10.9375rem;
    height: 9.1875rem;
  }
`;
