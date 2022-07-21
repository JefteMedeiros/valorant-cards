import * as AlertDialog from "@radix-ui/react-alert-dialog";
import Image from "next/image";
import React from "react";
import { VscClose } from "react-icons/vsc";

import {
  ModalComponent,
  ModalContainer,
  ModalChar,
  CharInfoDescription,
  CharSkillSection,
  CharSkill,
  ModalCloseButton,
  AgentCardMoreInfo,
  OverlayBlur,
  ModalWrapper,
  CharInfoWrapper,
  CharInfoName,
  CharInfoBio,
  CharInfoCategory,
  CharInfoSkills,
} from "./styles";

interface IProps {
  name: string;
  modalDescription: string;
  char: string;
  bio: string;
  category: string;
}

const AgentCardModal: React.FC<IProps> = ({
  name,
  bio,
  category,
  modalDescription,
  char,
}) => {
  return (
    <ModalComponent>
      <AgentCardMoreInfo />
      <AlertDialog.Portal>
        <OverlayBlur />
        <ModalContainer>
          <ModalWrapper>
            <ModalChar>
              <Image placeholder="blur" blurDataURL={char} layout="fill" src={char} alt={name} />
            </ModalChar>
            <CharInfoWrapper>
              <section>
                <CharInfoName>{name}</CharInfoName>
                <CharInfoBio>{bio}</CharInfoBio>
              </section>
              <section>
                <CharInfoCategory>{category}</CharInfoCategory>
                <CharInfoDescription>{modalDescription}</CharInfoDescription>
              </section>
              <section>
                <CharInfoSkills>Skills</CharInfoSkills>
                <CharSkillSection>
                  <CharSkill />
                  <CharSkill />
                  <CharSkill />
                  <CharSkill />
                </CharSkillSection>
              </section>
            </CharInfoWrapper>
            <ModalCloseButton>
              <VscClose />
            </ModalCloseButton>
          </ModalWrapper>
        </ModalContainer>
      </AlertDialog.Portal>
    </ModalComponent>
  );
};

export default AgentCardModal;
