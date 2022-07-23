import * as AlertDialog from '@radix-ui/react-alert-dialog';
import Image from 'next/image';
import React from 'react';
import { VscClose } from 'react-icons/vsc';

import {
  ModalComponent,
  ModalContainer,
  ModalChar,
  CharInfoDescription,
  CharSkillSection,
  CharSkill,
  ModalCloseButton,
  OverlayBlur,
  ModalWrapper,
  CharInfoWrapper,
  CharInfoName,
  CharInfoBio,
  CharInfoCategory,
  CharInfoSkills,
  ModalToggle,
} from './styles';

interface Abilities {
  displayName: string;
  description: string;
  displayIcon: string;
}

interface ModalProps {
  name: string;
  modalDescription: string;
  char: string;
  bio: string;
  skills: Abilities[];
  category: string;
}

const AgentCardModal: React.FC<ModalProps> = ({ name, bio, category, modalDescription, char, skills }) => {
  return (
    <ModalComponent>
      <ModalToggle />
      <AlertDialog.Portal>
        <OverlayBlur />
        <ModalContainer>
          <ModalWrapper>
            <ModalChar>
              <Image placeholder="blur" blurDataURL={char} layout="fill" src={char} alt={name} priority />
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
                  {skills.map((e, key) => {
                    return (
                      <CharSkill key={key} title={e.displayName}>
                        {/* O personagem Sova tem um valor Null na API. */}
                        <Image
                          layout="fill"
                          src={e.displayIcon !== null ? e.displayIcon : 'https://img.icons8.com/ios/452/valorant.png'}
                          alt={e.displayName}
                          priority
                        />
                      </CharSkill>
                    );
                  })}
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
