import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5.5rem 0;

  @media screen and (max-width: 1368px) {
    margin: 4rem 0;
  }

  background: ${(props) => props.theme["brand-white"]};
`;

export const Logo = styled.div`
  position: relative;
  width: 330px;
  margin-bottom: 3.2775rem;
  height: 281px;

  @media screen and (max-width: 1368px) {
    width: 240px;
    height: 196px;
  }
`;

export const NameForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NameSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const NameTitle = styled.label`
  font-family: "Valorant", sans-serif;
  font-size: 2rem;
  margin-bottom: 3.375rem;

  @media screen and (max-width: 1368px) {
    font-size: 1.75rem;
  }

  color: ${(props) => props.theme["red-500"]};
`;

export const NameInput = styled.input`
  max-width: 27.5rem;

  color: ${(props) => props.theme["red-500"]};
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  text-align: center;
  font-size: 2.5rem;

  outline: none;
  padding-bottom: 0.625rem;

  background: none;

  border: none;
  border-bottom: 9px solid ${(props) => props.theme["red-500"]};
  border-radius: 10px;

  &:active {
    border: 3px solid 9px solid ${(props) => props.theme["red-500"]};
  }

  @media screen and (max-width: 1368px) {
    max-width: 18.75rem;

    font-size: 1.625rem;
  }
`;

export const SeeCardsButton = styled.a`
  height: 3.75rem;
  width: 18.75rem;
  margin-top: 3.5rem;
  line-height: 2.2;

  text-align: center;
  font-family: "Valorant", sans-serif;
  font-size: 1.75rem;
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
`;
