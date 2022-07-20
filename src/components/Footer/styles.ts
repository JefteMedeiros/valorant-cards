import styled from "styled-components";

export const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100vw;
  background: ${(props) => props.theme["red-500"]};
  padding: 14px 0;
`;

export const FooterTextYear = styled.span`
  font-family: "Nunito", sans-serif;
`;

export const FooterText = styled.h1`
  font-size: 1.75rem;
  text-align: center;
  font-family: "Valorant", sans-serif;
  color: ${props => props.theme['brand-white']};
`;
