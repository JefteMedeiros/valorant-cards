import Image from "next/image";
import React from "react";
import AgentCardModal from "../AgentCardModal";

import {
  AgentCardChar,
  AgentCardContainer,
  AgentCardDescription,
  AgentCardName,
  AgentCardScore,
  AgentCardInteraction,
} from "./styles";

interface IProps {
  char: string;
  name: string;
  cardDescription: string;
  modalDescription: string;
  bio: string;
  category: string;
}

const AgentCard: React.FC<IProps> = ({ char, name, category, bio, modalDescription, cardDescription }) => {
  return (
    <AgentCardContainer>
      <AgentCardChar>
        <Image  placeholder="blur" blurDataURL={char} layout="fill" alt="Jett" src={char} />
      </AgentCardChar>
      <AgentCardScore>7</AgentCardScore>
      <AgentCardInteraction>
        <AgentCardName>{name}</AgentCardName>
        <AgentCardDescription>{cardDescription}</AgentCardDescription>
        <AgentCardModal char={char} name={name} modalDescription={modalDescription} bio={bio} category={category} />
      </AgentCardInteraction>
    </AgentCardContainer>
  );
};

export default AgentCard;
