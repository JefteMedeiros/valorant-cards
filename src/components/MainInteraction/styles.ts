import styled from "styled-components";

export const MainContainer = styled.div`
  margin: 4rem 0;
  gap: 3.625rem;
  background: ${(props) => props.theme["brand-white"]};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.div`
  margin-bottom: 3.625rem;
  position: relative;
  width: 330px;
  height: 281px;

  @media screen and (max-width: 1366px) {
    width: 240px;
    height: 196px;
  }
`;

export const NameSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const NameTitle = styled.label`
  font-family: "Valorant", sans-serif;
  font-size: 1.75rem;
  color: ${(props) => props.theme["red-500"]};
`;

export const NameInput = styled.input`
  border: none;
  width: 100%;
  border-bottom: 9px solid ${(props) => props.theme["red-500"]};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const SeeCardsButton = styled.button`
  font-family: "Valorant", sans-serif;
  color: ${(props) => props.theme["red-500"]};
  font-size: 1.75rem;
  border: 3px solid ${(props) => props.theme["red-500"]};
  border-radius: 10px;
  background: none;
  width: 18.75rem;
  height: 3.75rem;
`;
