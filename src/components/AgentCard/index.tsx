import React from 'react';
import Image from 'next/image';
import AgentCardModal from '../AgentCardModal';

import { AgentCardChar, AgentCardContainer, AgentCardDescription, AgentCardName, AgentCardScore, AgentCardInteraction } from './styles';
interface SkillProps {
  displayName: string;
  description: string;
  displayIcon: string;
}
interface IProps {
  char: string;
  name: string;
  cardDescription: string;
  modalDescription: string;
  bio: string;
  skills: SkillProps[];
  category: string;
}

const AgentCard: React.FC<IProps> = ({ char, name, category, bio, modalDescription, cardDescription, skills }) => {
  return (
    <AgentCardContainer>
      <AgentCardChar>
        <Image layout="fill" alt="Jett" src={char} />
      </AgentCardChar>
      <AgentCardScore>7</AgentCardScore>
      <AgentCardInteraction>
        <AgentCardName>{name}</AgentCardName>
        <AgentCardDescription>{cardDescription}</AgentCardDescription>
        <AgentCardModal skills={skills} char={char} name={name} modalDescription={modalDescription} bio={bio} category={category} />
      </AgentCardInteraction>
    </AgentCardContainer>
  );
};

export default AgentCard;
