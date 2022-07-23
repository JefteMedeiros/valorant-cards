import React from 'react';
import Image from 'next/image';
import AgentCardModal from '../AgentCardModal';

import { AgentCardChar, AgentCardContainer, AgentCardDescription, AgentCardName, AgentCardScore, AgentCardInteraction } from './styles';

export interface Ability {
  displayName: string;
  description: string;
  displayIcon: string;
}
interface AgentProps {
  char: string;
  cardPoints: number;
  name: string;
  cardDescription: string;
  modalDescription: string;
  bio: string;
  skills: Ability[];
  category: string;
}

const AgentCard: React.FC<AgentProps> = ({ cardPoints, char, name, category, bio, modalDescription, cardDescription, skills }) => {
  return (
    <AgentCardContainer>
      <AgentCardChar>
        <Image layout="fill" alt="Jett" src={char} priority />
      </AgentCardChar>
      <AgentCardScore>{cardPoints}</AgentCardScore>
      <AgentCardInteraction>
        <AgentCardName>{name}</AgentCardName>
        <AgentCardDescription>{cardDescription}</AgentCardDescription>
        <AgentCardModal skills={skills} char={char} name={name} modalDescription={modalDescription} bio={bio} category={category} />
      </AgentCardInteraction>
    </AgentCardContainer>
  );
};

export default AgentCard;
