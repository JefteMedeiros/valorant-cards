import * as AlertDialog from "@radix-ui/react-alert-dialog";
import styled from "styled-components";
import { DocumentText, DocumentTextValorant } from "../../styles/Global/styles";

export const AgentCardMoreInfo = styled(AlertDialog.Trigger)`
  border: none;
  margin: auto;
  content: "";
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background: ${(props) => props.theme["red-600"]};
  transition: all 250ms;

  &:hover {
    cursor: pointer;
    transform: scale(1.15);
  }
`;

export const OverlayBlur = styled(AlertDialog.Overlay)`
  @keyframes OverlayShow {
    from {opacity: 0;}
    to {opacity: 1;}
  }

  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 9999;
  inset: 0;
  animation: OverlayShow cubic-bezier(0.16, 1, 0.3, 1) 250ms; 
`;

export const ModalComponent = styled(AlertDialog.Root)``;

export const ModalContainer = styled(AlertDialog.Content)`
  @keyframes OverlayShow {
    from {opacity: 0;}
    to {opacity: 1;}
  }

  animation: OverlayShow cubic-bezier(0.16, 1, 0.3, 1) 250ms; 
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
    object-fit: cover;
  }
`;

export const CharInfoWrapper = styled.article`
  display: flex;
  width: 287px;
  flex-direction: column;
  gap: 0.75rem;
`;

export const CharInfoName = styled(DocumentTextValorant)`
  font-size: 0.875rem;
  padding-bottom: 0.25rem;
`;

export const CharInfoCategory = styled(DocumentTextValorant)`
`;

export const CharInfoSkills = styled(DocumentTextValorant)``;

export const CharInfoBio = styled.p`
  font-family: "Nunito", sans-serif;
  font-size: 0.8rem;
  color: ${(props) => props.theme["red-500"]};
`;

export const CharInfoDescription = styled(CharInfoBio)``;

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

export const ModalCloseButton = styled(AlertDialog.Cancel)`
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