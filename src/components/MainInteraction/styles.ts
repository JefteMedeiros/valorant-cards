import styled from "styled-components";
import { DocumentTextNunito } from "../../styles/Global/styles";

export const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 2.5625rem);

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
  max-width: 20.625rem;
  align-items: center;
  flex-direction: column;
`;

export const NameTitle = styled(DocumentTextNunito)`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 3.375rem;

  @media screen and (max-width: 1368px) {
    font-size: 1.75rem;
  }
`;

export const NameInput = styled.input`
  max-width: 100%;

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
  margin-top: 3.5rem;
  padding: 0.5625rem 0;
  width: 100%;

  text-align: center;
  font-weight: bold;
  font-family: "Nunito", sans-serif;
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
