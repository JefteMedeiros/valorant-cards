import styled from "styled-components";

export const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100vw;
  padding: 14px 0;

  background: ${(props) => props.theme["red-500"]};
`;

export const FooterTextYear = styled.span`
  font-family: "Nunito", sans-serif;
`;

export const FooterText = styled.h1`
  font-size: 1.25rem;
  text-align: center;
  font-family: "Valorant", sans-serif;

  color: ${props => props.theme['brand-white']};
`;
