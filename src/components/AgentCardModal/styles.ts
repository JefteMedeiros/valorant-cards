import styled from "styled-components";
import { DocumentText } from "../../styles/Global/styles";

export const ModalContainer = styled.div`
  background-color: ${(props) => props.theme["brand-white"]};
  border-radius: 10px;
  z-index: 9999;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const ModalWrapper = styled.section`
  display: flex;
  gap: 1.6875rem;
  padding: 2.1875rem 1.5625rem;
`;

export const ModalChar = styled.div`
  position: relative;
  width: 150px;
  height: 231px;

  img {
    position: absolute;
  }
`;

export const ModalCharInfo = styled.article`
  display: flex;
  width: 287px;
  flex-direction: column;
  gap: 0.75rem;
`;

export const CharInfoTitle = styled(DocumentText)`
  font-size: 0.875rem;
  padding-bottom: 0.25rem;
`;

export const CharInfoDescription = styled.p`
  font-family: "Nunito", sans-serif;
  font-size: 0.75rem;
  color: ${(props) => props.theme["red-500"]};
`;

export const CharSkillSection = styled.article`
  display: flex;
  gap: 0.375rem;
`;

export const CharSkill = styled.article`
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 4px;
  background: #d9d9d9;
`;

export const ModalCloseButton = styled.button`
  display: flex;
  background: transparent;
  border: 0;
  position: absolute;
  top: 0.625rem;
  right: 0.625rem;
  font-size: 1.625rem;
  color: ${(props) => props.theme["red-500"]};
  transition: all 200ms;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
