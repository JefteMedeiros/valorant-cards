import Image from "next/image";
import React, { useContext } from "react";
import { VscClose } from "react-icons/vsc";
import { Context } from "../../context";

import {
  ModalWrapper,
  ModalContainer,
  ModalChar,
  ModalCharInfo,
  CharInfoTitle,
  CharInfoDescription,
  CharSkillSection,
  CharSkill,
  ModalCloseButton,
} from "./styles";

const AgentCardModal: React.FC = () => {
  const { handleToggleModal, toggleModal } = useContext(Context)

  return (
    <ModalContainer>
      <ModalCloseButton onClick={() => handleToggleModal(!toggleModal)}>
        <VscClose />
      </ModalCloseButton>
      <ModalWrapper>
        <ModalChar>
          <Image alt="Jett" layout="fill" src="/Jett.png" />
        </ModalChar>
        <ModalCharInfo>
          <div>
            <CharInfoTitle>Jett</CharInfoTitle>
            <CharInfoDescription>
              Representing her home country of South Korea, Jett&apos;s agile and
              evasive fighting style lets her take risks no one else can. She
              runs circles around every skirmish, cutting enemies up before they
              even know what hit them.
            </CharInfoDescription>
          </div>
          <div>
            <CharInfoTitle>Duelist</CharInfoTitle>
            <CharInfoDescription>
              Duelists are self-sufficient fraggers who their team expects,
              through abilities and skills, to get high frags and seek out
              engagements first.
            </CharInfoDescription>
          </div>
          <div>
            <CharInfoTitle>Skills</CharInfoTitle>
            <CharSkillSection>
              <CharSkill />
              <CharSkill />
              <CharSkill />
              <CharSkill />
            </CharSkillSection>
          </div>
        </ModalCharInfo>
      </ModalWrapper>
    </ModalContainer>
  );
};

export default AgentCardModal;
